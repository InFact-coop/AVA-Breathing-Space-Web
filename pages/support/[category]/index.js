import { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import useModal from 'use-react-modal'
import useLocalStorage from '../../../lib/useLocalStorage'
import { getSortBy, fetchServices } from '../../../lib/filter'
import { ModalContext } from '../../../components/Modal'
import Container from '../../../components/Container'
import { ServicePreview } from '../../../components/Service'
import SupportFilter from '../../../components/SupportFilter'

const Services = styled.section.attrs({
  className: '',
})``

const CategoryStyled = styled(Container).attrs({
  className: '',
})``

const Category = ({ supportServices, query: { category } }) => {
  const [services, setServices] = useState(supportServices)
  const [region, setRegion] = useLocalStorage('region', null)
  const [filters, setFilters] = useState([])
  const [sort, setSort] = useState('')
  const { setModal } = useContext(ModalContext)
  const { targetRef, isOpen, openModal, closeModal, Modal } = useModal()

  useEffect(async () => {
    const { supportServices: byFilter } = await fetchServices({
      slug: category,
      filters: [],
      chosenRegion: region?.value || null,
      sortBy: '',
    })

    setServices(byFilter)
    setModal({ targetRef, isOpen, openModal, closeModal, Modal })
    return () => ({})
  }, [])

  const applyFiltersAndSort = async ({
    checkedFilters,
    sortType,
    selectedRegion,
  }) => {
    const sortBy = getSortBy(sortType)

    setFilters(checkedFilters)
    setRegion(selectedRegion)
    setSort(sortType)

    const { supportServices: byFilter } = await fetchServices({
      slug: category,
      filters,
      chosenRegion: region?.value || null,
      sortBy,
    })

    setServices(byFilter)
    closeModal()
  }

  return (
    <>
      <CategoryStyled>
        <button
          className="flex items-center justify-center rounded-2.5 w-full py-4 border border-midgray mb-4"
          onClick={openModal}
        >
          Filters ({filters.length + (region ? 1 : 0) + (sort ? 1 : 0)})
        </button>
        <Services>{R.addIndex(R.map)(ServicePreview)(services)}</Services>
      </CategoryStyled>
      {isOpen && (
        <Modal>
          <SupportFilter
            filters={filters}
            sort={sort}
            region={region}
            applyFiltersAndSort={applyFiltersAndSort}
          />
        </Modal>
      )}
    </>
  )
}

export default Category
Category.getInitialProps = async ctx => {
  const data = await fetchServices({
    slug: ctx.query.category,
    filters: [],
    sortBy: '',
    chosenRegion: null,
  })

  return { pageTitle: data._type, ...data }
}
