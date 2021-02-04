import { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import useModal from 'use-react-modal'
import { SUPPORT_FILTER, LOCATION_FILTER } from '../../../lib/constants'
import { getSortBy, fetchServices } from '../../../lib/filter'
import AppContext from '../../../lib/AppContext'
import Container from '../../../components/Container'
import { ServicePreview } from '../../../components/Service'
import SupportFilter from '../../../components/SupportFilter'
import LocationFilter from '../../../components/LocationFilter'

const Services = styled.section.attrs({
  className: '',
})``

const CategoryStyled = styled(Container).attrs({
  className: '',
})``

const Category = ({ query: { category } }) => {
  const [services, setServices] = useState([])
  const [filters, setFilters] = useState([])
  const [modalType, setModalType] = useState(null)
  const [sort, setSort] = useState('')
  const { setModal, region, setRegion } = useContext(AppContext)
  const { targetRef, isOpen, openModal, closeModal, Modal } = useModal()

  useEffect(() => {
    const setFilteredServices = async () => {
      const { supportServices: filteredServices } = await fetchServices({
        slug: category,
        filters: [],
        chosenRegion: region?.value || null,
        sortBy: '',
      })
      setServices(filteredServices)
    }

    setFilteredServices()
    setModal({ targetRef, isOpen, openModal, closeModal, Modal })
    return () => ({})
  }, [region])

  const openAndSetModal = newModalType => ref => {
    setModalType(newModalType)
    openModal(ref)
  }

  const applyFilters = async ({
    checkedFilters = filters,
    sortType = sort,
    selectedRegion = region,
  }) => {
    setFilters(checkedFilters)
    setRegion(selectedRegion)
    setSort(sortType)

    const sortBy = getSortBy(sortType)

    const { supportServices: byFilter } = await fetchServices({
      slug: category,
      filters: checkedFilters,
      chosenRegion: selectedRegion?.value || null,
      sortBy,
    })

    setServices(byFilter)
    closeModal()
  }

  return (
    <>
      <div className="flex flex-col">
        <FilterButton
          className={filters.length > 0 && 'font-bold'}
          imgSrc="/icons/filter.svg"
          onClick={openAndSetModal(SUPPORT_FILTER)}
        >
          Filters
          {filters.length > 0 ? ` (${filters.length + (sort ? 1 : 0)})` : null}
        </FilterButton>
        <FilterButton
          className={region && region.label ? 'font-bold' : null}
          imgSrc="/icons/location.svg"
          onClick={openAndSetModal(LOCATION_FILTER)}
        >
          Location
          {region ? `: ${region.label}` : null}
        </FilterButton>
      </div>
      <CategoryStyled>
        <Services>{R.addIndex(R.map)(ServicePreview)(services)}</Services>
      </CategoryStyled>
      {isOpen && (
        <Modal>
          {modalType === SUPPORT_FILTER ? (
            <SupportFilter
              filters={filters}
              sort={sort}
              applyFilters={applyFilters}
            />
          ) : modalType === LOCATION_FILTER ? (
            <LocationFilter region={region} applyFilters={applyFilters} />
          ) : null}
        </Modal>
      )}
    </>
  )
}

const FilterButton = ({ children, imgSrc, className, onClick }) => (
  <StyledFilterButton className={className} onClick={onClick}>
    <span>{children}</span>
    <img src={imgSrc} alt="Filter button icon" />
  </StyledFilterButton>
)

const StyledFilterButton = styled.button.attrs({
  className:
    'flex items-center justify-between w-full px-4 py-3 border-b border-lightgray last:mb-4 bg-white text-left',
})``

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
