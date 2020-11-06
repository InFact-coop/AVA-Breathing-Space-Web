import { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import client from '../client'
import Navbar, { getNavbarOptions } from './Navbar'
import Container from './Container'
import Checkbox from './Checkbox'
import { PurpleButton } from './Button'

const GET_FILTER_TYPES = `*[_type == "supportFilterType"].title`

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
  className: 'text-gray font-bold font-sm mb-2.5',
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
        <FilterTitle>Filter by Service Type</FilterTitle>
        {R.addIndex(R.map)((label, index) => {
          return (
            <Checkbox
              key={`${label}-${index}`}
              label={label}
              name={label}
              checked={R.includes(label)(checkedFilters) || false}
              onChange={handleChange}
            />
          )
        })(filterTypes)}
      </Contents>
      <ApplyButton
        form="filterForm"
        onClick={() => applyFilters(checkedFilters)}
      />
    </FilterContainer>
  )
}

export default SupportFilter
