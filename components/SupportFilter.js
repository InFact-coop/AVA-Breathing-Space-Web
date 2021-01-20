import { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import client from '../client'
import Navbar, { getNavbarOptions } from './Navbar'
import Container from './Container'
import Checkbox from './Checkbox'
import { PurpleButton } from './Button'

const GET_FILTER_TYPES = `*[_type == "supportFilterCategory"] {
  title,
  "filters": *[ _type == "supportFilterType" && references(^._id)].title
}`

const FilterContainer = styled(Container).attrs({
  className: 'w-screen bg-white',
})`
  height: 100vh;
  padding: 0;
`

const Contents = styled(Container).attrs({
  as: 'form',
  id: 'filterForm',
  className: 'overflow-scroll',
})`
  height: calc(100vh - 116px);
`

const ApplyButton = styled(PurpleButton).attrs({
  children: 'Apply',
  className: 'my-5 h-full',
})`
  margin: 0;
  border-radius: 0px;
`

const FilterTitle = styled.div.attrs({
  className: 'text-gray font-med font-bold mb-2.5',
})``

const getNewFilters = ({ checked, name, checkedFilters }) => {
  switch (true) {
    case checked && !R.includes(name)(checkedFilters):
      return [...checkedFilters, name]
    case !checked && R.includes(name)(checkedFilters):
      return R.without(name)(checkedFilters)
    default:
      return checkedFilters
  }
}

const SupportFilter = ({ applyFilters }) => {
  const [filterTypes, setFilterTypes] = useState([])
  const [checkedFilters, setCheckedFilters] = useState([])

  useEffect(() => {
    const getFilterTypes = async () => {
      const newFilterTypes = await client.fetch(GET_FILTER_TYPES)
      setFilterTypes(newFilterTypes)
    }

    getFilterTypes()
  }, [])

  const handleChange = ({ target: { checked, name } }) => {
    const newFilters = getNewFilters({ checked, name, checkedFilters })
    setCheckedFilters(newFilters)
  }

  const clearFilters = () => setCheckedFilters([])

  return (
    <FilterContainer>
      <Navbar
        {...getNavbarOptions({
          _type: 'supportFilterType',
          clear: clearFilters,
        })}
      />
      <Contents>
        <FilterTitle>Filter by</FilterTitle>
        {R.addIndex(R.map)(props => (
          <FilterCategory
            handleChange={handleChange}
            checkedFilters={checkedFilters}
            {...props}
          />
        ))(filterTypes)}
      </Contents>
      <ApplyButton
        form="filterForm"
        onClick={() => applyFilters(checkedFilters)}
      />
    </FilterContainer>
  )
}

const CategoryButton = styled.button.attrs({
  className:
    'flex items-center justify-between p-2.5 border-midgray border-b w-full',
})`
  &:first-of-type {
    border-top-width: 1px;
  }
`

const FilterCategory = (
  { title, filters, handleChange, checkedFilters },
  index,
) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCategory = e => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <Fragment key={`filter-cat-${index}`}>
      <CategoryButton onClick={toggleCategory}>
        <div>{title}</div>
        <img
          src="/icons/drawer.svg"
          alt="Drawer closed"
          className={isOpen ? '' : 'transform rotate-180'}
        />
      </CategoryButton>
      {isOpen &&
        R.addIndex(R.map)(filter => (
          <Filter
            handleChange={handleChange}
            checkedFilters={checkedFilters}
            filter={filter}
          />
        ))(filters)}
    </Fragment>
  )
}

const Filter = ({ filter, checkedFilters, handleChange }, index) => {
  return (
    <Checkbox
      key={`${filter}-${index}`}
      label={filter}
      name={filter}
      checked={R.includes(filter)(checkedFilters) || false}
      onChange={handleChange}
    />
  )
}

export default SupportFilter
