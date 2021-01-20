import { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import client from '../client'
import { LIKES, NAME, RECENT } from '../lib/constants'
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

const SortButton = styled.div.attrs(({ sortTypeSelected }) => ({
  className: `py-1.75 px-6 w-1/3 text-center border border-solid border-lightgray rounded-2.5 ${
    sortTypeSelected ? 'bg-white' : 'bg-none'
  }`,
}))``

const SortToggle = ({ sortType, setSortType }) => (
  <div className="mt-2.5 mb-10 flex justify-between bg-lightgray rounded-2.5">
    {[LIKES, NAME, RECENT].map(sort => (
      <SortButton
        sortTypeSelected={sortType === sort}
        onClick={() => setSortType(sort)}
        key={sort}
      >
        {R.compose(
          R.join(''),
          R.over(R.lensIndex(0), R.toUpper),
          R.toLower,
        )(sort.toString())}
      </SortButton>
    ))}
  </div>
)

const SupportFilter = ({ filters, sort, applyFiltersAndSort }) => {
  const [sortType, setSortType] = useState('')
  const [filterTypes, setFilterTypes] = useState([])
  const [checkedFilters, setCheckedFilters] = useState([])

  useEffect(() => {
    const getFilterTypes = async () => {
      const newFilterTypes = await client.fetch(GET_FILTER_TYPES)
      setFilterTypes(newFilterTypes)
    }

    getFilterTypes()
    setCheckedFilters(filters)
    setSortType(sort)
  }, [])

  const handleChange = ({ target: { checked, name } }) => {
    const newFilters = getNewFilters({ checked, name, checkedFilters })
    setCheckedFilters(newFilters)
  }

  const clearFilters = () => {
    setCheckedFilters([])
    setSortType()
  }

  return (
    <FilterContainer>
      <Navbar
        {...getNavbarOptions({
          _type: 'supportFilterType',
          clear: clearFilters,
        })}
      />
      <Contents>
        <FilterTitle>Sort by</FilterTitle>
        <SortToggle sortType={sortType} setSortType={setSortType} />
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
        onClick={() => {
          applyFiltersAndSort({ checkedFilters, sortType })
        }}
      />
    </FilterContainer>
  )
}

export default SupportFilter
