import { useState, useEffect } from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import client from '../client'
import { GET_REGIONS } from '../lib/filter'
import Navbar, { getNavbarOptions } from './Navbar'
import Container from './Container'
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

const LocationFilter = ({ region, applyFilters }) => {
  const [regions, setRegions] = useState([])
  const [selectedRegion, setSelectedRegion] = useState(region)

  useEffect(() => {
    const getRegions = async () => {
      const newRegions = await client.fetch(GET_REGIONS)
      setRegions(newRegions)
    }

    getRegions()
  }, [])

  const clearFilters = () => {
    setSelectedRegion(null)
  }

  return (
    <FilterContainer>
      <Navbar
        {...getNavbarOptions({
          _type: 'locationFilterType',
          clear: clearFilters,
        })}
      />
      <Contents>
        <FilterTitle>Customise location</FilterTitle>
        <Select
          value={selectedRegion}
          defaultValue={selectedRegion}
          onChange={setSelectedRegion}
          options={regions}
        />
      </Contents>
      <ApplyButton
        form="filterForm"
        onClick={() => {
          applyFilters({
            selectedRegion,
          })
        }}
      />
    </FilterContainer>
  )
}

export default LocationFilter
