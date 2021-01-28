import { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import client from '../client'
import { LIKES, NAME, RECENT } from '../lib/constants'
import { GET_FILTER_TYPES } from '../lib/filter'
import Navbar, { getNavbarOptions } from './Navbar'
import Container from './Container'
import Checkbox from './Checkbox'
import { PurpleButton } from './Button'

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

const SortButton = styled.div.attrs(({ sortTypeSelected }) => ({
  className: `py-1.75 px-6 w-1/3 text-center border-r last:border-none border-solid border-midgray ${
    sortTypeSelected ? 'bg-white' : 'bg-none'
  }`,
}))`
  &:first-of-type {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &:last-of-type {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`

const SortToggle = ({ sortType, setSortType }) => (
  <div className="mt-2.5 mb-10 flex justify-between bg-lightgray rounded-2.5 border border-midgray">
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

const SupportFilter = ({ filters, sort, applyFilters }) => {
  const [filterTypes, setFilterTypes] = useState([])
  const [checkedFilters, setCheckedFilters] = useState(filters)
  const [sortType, setSortType] = useState(sort)

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
        <FilterTitle>Filter by</FilterTitle>
        {R.addIndex(R.map)(props => (
          <FilterCategory
            handleChange={handleChange}
            key={`category-${props.title}`}
            checkedFilters={checkedFilters}
            {...props}
          />
        ))(filterTypes)}
      </Contents>
      <ApplyButton
        form="filterForm"
        onClick={() => {
          applyFilters({
            checkedFilters,
            sortType,
          })
        }}
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
  const [isOpen, setIsOpen] = useState(
    R.any(f => R.includes(f)(filters))(checkedFilters),
  )

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
          className={isOpen ? 'transform rotate-180' : ''}
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

const Filter = ({ filter, checkedFilters, handleChange }, index) => (
  <Checkbox
    key={`${filter}-${index}`}
    label={filter}
    name={filter}
    checked={R.includes(filter)(checkedFilters) || false}
    onChange={handleChange}
  />
)

export default SupportFilter
