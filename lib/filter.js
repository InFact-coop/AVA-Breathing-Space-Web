import client from '../client'
import { LIKES, NAME, RECENT } from './constants'

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
    case RECENT:
      return 'publishedAt desc'
    default:
      return ''
  }
}

const fetchServices = ({ slug, filters, chosenRegion, sortBy }) =>
  client.fetch(getCategoryServicePreview(sortBy), {
    slug,
    filters,
    chosenRegion,
    sortBy,
  })

export {
  GET_FILTER_TYPES,
  GET_REGIONS,
  fetchServices,
  getCategoryServicePreview,
  getSortBy,
}
