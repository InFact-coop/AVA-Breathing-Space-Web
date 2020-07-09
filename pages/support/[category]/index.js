import { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import useModal from 'use-react-modal'
import { ModalContext } from '../../../components/Modal'
import Container from '../../../components/Container'
import { ServicePreview } from '../../../components/Service'
import SupportFilter from '../../../components/SupportFilter'
import client from '../../../client'

const GET_SERVICES_BY_FILTER = `*[_type == "supportService" && references(^._id) && references(*[_type=="supportFilterType" && title in $filters]._id)] { 
  name, 
  "logo": logo.asset->url,
  "tags": tags[]->title,
  "slug": "support/" + $slug + "/" + slug.current
}`

const GET_SERVICES_WITHOUT_FILTER = `*[_type == "supportService" && references(^._id)] { 
  name, 
  "logo": logo.asset->url,
  "tags": tags[]->title,
  "slug": "support/" + $slug + "/" + slug.current
}`

const GET_CATEGORY_SERVICE_PREVIEW = `*[_type == "supportCategory" && slug.current == $slug][0] {
  title,
  _type,
  "slug": slug.current,
  "supportServices": select(
      defined($filters) => ${GET_SERVICES_BY_FILTER},
    ${GET_SERVICES_WITHOUT_FILTER}
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
  const { setModal } = useContext(ModalContext)
  const { targetRef, isOpen, openModal, closeModal, Modal } = useModal()

  useEffect(() => {
    setModal({ targetRef, isOpen, openModal, closeModal, Modal })
    return () => ({})
  }, [])

  const applyFilters = async filters => {
    const { supportServices: byFilter } = await client.fetch(
      GET_CATEGORY_SERVICE_PREVIEW,
      {
        slug: category,
        filters,
      },
    )

    setServices(byFilter)
    closeModal()
  }

  return (
    <>
      <CategoryStyled>
        <Services>{R.addIndex(R.map)(ServicePreview)(services)}</Services>
      </CategoryStyled>
      {isOpen && (
        <Modal>
          <SupportFilter applyFilters={applyFilters} />
        </Modal>
      )}
    </>
  )
}

export default Category
Category.getInitialProps = async ctx => {
  const thing = await client.fetch(GET_CATEGORY_SERVICE_PREVIEW, {
    slug: ctx.query.category,
    filters: [],
  })

  return thing
}
