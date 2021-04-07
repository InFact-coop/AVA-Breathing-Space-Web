import * as R from 'ramda'
import client from '../client'
import { LIKES, NAME } from './constants'

const GET_FILTER_TYPES = `*[_type == "supportFilterCategory"] {
  title,
  "filters": *[ _type == "supportFilterType" && references(^._id)].title
}`

const GET_REGIONS = `*[_type == "region"] {
  "label": name,
  "value": name
}`

const getServicesByRegionAndFilter = sortBy => `*[_type == "supportService" && references(^._id) && references(*[_type=="region" && name==$chosenRegion]._id) && references(*[_type=="supportFilterType" && title in $filters]._id)] | order(${sortBy}) { 
  name, 
  "logo": logo.asset->url,
  "tags": tags[]->title,
  "applicableFilters": filterTypes[]->{"filterCategory": filterCategory->title, "filterType": title},
  "slug": "support/" + $slug + "/" + slug.current
}`

const getServicesByRegion = sortBy => `*[_type == "supportService" && references(^._id) && references(*[_type=="region" && name==$chosenRegion]._id)] | order(${sortBy}) { 
  name, 
  "logo": logo.asset->url,
  "tags": tags[]->title,
  "slug": "support/" + $slug + "/" + slug.current
}`

const getServicesByFilter = sortBy => `*[_type == "supportService" && references(^._id) && references(*[_type=="supportFilterType" && title in $filters]._id)] | order(${sortBy}) { 
  name, 
  "logo": logo.asset->url,
  "tags": tags[]->title,
  "applicableFilters": filterTypes[]->{"filterCategory": filterCategory->title, "filterType": title},
  "slug": "support/" + $slug + "/" + slug.current
}`

const getServicesWithoutFilter = sortBy => `*[_type == "supportService" && references(^._id)] | order(${sortBy}) { 
  name, 
  "logo": logo.asset->url,
  "tags": tags[]->title,
  "slug": "support/" + $slug + "/" + slug.current
}`

const getCategoryServicePreview = sortBy => `*[_type == "supportCategory" && slug.current == $slug][0] {
  title,
  _type,
  "slug": slug.current,
  "supportServices": select(
      defined($chosenRegion) && defined($filters) => ${getServicesByRegionAndFilter(
        sortBy,
      )},
      defined($chosenRegion) => ${getServicesByRegion(sortBy)},
      defined($filters) => ${getServicesByFilter(sortBy)},
    ${getServicesWithoutFilter(sortBy)}
    )
}`

const getSortBy = sortType => {
  switch (sortType) {
    case LIKES:
      return 'likes desc'
    case NAME:
      return 'name'
    default:
      return ''
  }
}

const fetchServices = async ({
  slug,
  filters,
  checkedFilterCategories,
  chosenRegion,
  sortBy,
}) => {
  const { supportServices, ...rest } = await client.fetch(
    getCategoryServicePreview(sortBy),
    {
      slug,
      filters,
      chosenRegion,
      sortBy,
    },
  )

  const filteredServices = R.reduce(
    (accServices, service) => {
      if (!service.applicableFilters) return [...accServices, service]

      const filterCategories = R.reduce(
        (accCategories, { filterCategory, filterType }) => {
          const accumulatedCategory = accCategories[filterCategory] || []
          return {
            ...accCategories,
            [filterCategory]: [...accumulatedCategory, filterType],
          }
        },
        {},
        service.applicableFilters,
      )

      const isFiltered = R.pipe(
        R.mapObjIndexed((checked, categoryName) => {
          const serviceApplicable = filterCategories[categoryName] || []
          if (R.isEmpty(checked)) return true
          if (R.isEmpty(serviceApplicable)) return false
          return R.any(c => R.includes(c, serviceApplicable))(checked)
        }),
        R.values,
        R.none(s => s === false),
      )(checkedFilterCategories)

      if (isFiltered) return [...accServices, service]
      return accServices
    },
    [],
    supportServices,
  )

  return {
    supportServices: filteredServices,
    ...rest,
  }
}

export {
  GET_FILTER_TYPES,
  GET_REGIONS,
  fetchServices,
  getCategoryServicePreview,
  getSortBy,
}
