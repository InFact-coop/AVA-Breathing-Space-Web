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
  id: 'locationForm',
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
  const [selectedRegion, setSelectedRegion] = useState(region)

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
        <RegionSelect
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </Contents>
      <ApplyButton
        form="locationForm"
        onClick={() => {
          applyFilters({
            selectedRegion,
          })
        }}
      />
    </FilterContainer>
  )
}

export const RegionSelect = ({ selectedRegion, setSelectedRegion }) => {
  const [regions, setRegions] = useState([])

  useEffect(() => {
    const getRegions = async () => {
      const newRegions = await client.fetch(GET_REGIONS)
      setRegions(newRegions)
    }

    getRegions()
  }, [])

  return (
    <Select
      className="w-full h-full"
      classNamePrefix="locationselect"
      style={{
        control: () => ({
          height: '100%',
        }),
      }}
      value={selectedRegion}
      defaultValue={selectedRegion}
      onChange={setSelectedRegion}
      options={regions}
      placeholder="Search and select region"
    />
  )
}

export default LocationFilter
