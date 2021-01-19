import { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import useModal from 'use-react-modal'
import { LIKES, NAME, RECENT } from '../../../lib/constants'
import { ModalContext } from '../../../components/Modal'
import Container from '../../../components/Container'
import { ServicePreview } from '../../../components/Service'
import SupportFilter from '../../../components/SupportFilter'
import client from '../../../client'

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
      defined($filters) => ${getServicesByFilter(sortBy)},
    ${getServicesWithoutFilter(sortBy)}
    )
}`

const Services = styled.section.attrs({
  className: '',
})``

const CategoryStyled = styled(Container).attrs({
  className: '',
})``

const Category = ({ supportServices, query: { category } }) => {
  const [services, setServices] = useState(supportServices)
  const [filters, setFilters] = useState([])
  const [sort, setSort] = useState('')
  const { setModal } = useContext(ModalContext)
  const { targetRef, isOpen, openModal, closeModal, Modal } = useModal()

  useEffect(() => {
    setModal({ targetRef, isOpen, openModal, closeModal, Modal })
    return () => ({})
  }, [])

  const applyFiltersAndSort = async ({
    checkedFilters: filters = [],
    sortType: sort = '',
  }) => {
    let sortBy = ''

    switch (sort) {
      case LIKES:
        sortBy = 'likes desc'
        break
      case NAME:
        sortBy = 'name'
        break
      case RECENT:
        sortBy = 'publishedAt desc'
        break
      default:
        sortBy = ''
    }

    const { supportServices: byFilter } = await client.fetch(
      getCategoryServicePreview(sortBy),
      {
        slug: category,
        filters,
        sortBy,
      },
    )

    setServices(byFilter)
    setFilters(filters)
    setSort(sort)
    closeModal()
  }

  return (
    <>
      <CategoryStyled>
        <Services>{R.addIndex(R.map)(ServicePreview)(services)}</Services>
      </CategoryStyled>
      {isOpen && (
        <Modal>
          <SupportFilter
            filters={filters}
            sort={sort}
            applyFiltersAndSort={applyFiltersAndSort}
          />
        </Modal>
      )}
    </>
  )
}

export default Category
Category.getInitialProps = async ctx => {
  const data = await client.fetch(getCategoryServicePreview(''), {
    slug: ctx.query.category,
    filters: [],
    sortBy: '',
  })

  return { pageTitle: data._type, ...data }
}
