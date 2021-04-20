import { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../lib/AppContext'
import client from '../client'
import { RegionSelect } from './LocationFilter'
import { Block } from './BlockSerializers'
import Exit from './Exit'

const GET_LOCATION_STEP = `*[_type == "page" && slug.current == "customise-location"][0]`

const LocationStep = ({ closeOnboarding }) => {
  const { setRegion } = useContext(AppContext)
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [props, updateProps] = useState()
  useEffect(() => {
    const getLocationStep = async () => {
      const LocationProps = await client.fetch(GET_LOCATION_STEP)
      updateProps(LocationProps)
    }

    getLocationStep()
  }, [])

  return props ? (
    <>
      <Title>{props.title}</Title>
      <Block
        body={props.body}
        className="mb-5"
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
      <h2 className="font-bold text-med mb-4">Select your region (optional)</h2>
      <div className="flex items-center justify-between">
        <RegionSelect
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          className="w-full h-full"
          classNamePrefix="onboarding_location"
        />
        <button
          onClick={() => {
            setRegion(selectedRegion)
            closeOnboarding()
          }}
          className="uppercase bg-lightviolet rounded-2.5 py-4 px-4 ml-2.5"
        >
          OK
        </button>
      </div>
      <Exit />
    </>
  ) : (
    <div />
  )
}

const Title = styled.h1.attrs({
  className: 'font-serif font-xl mb-2.5',
})``

export default LocationStep
