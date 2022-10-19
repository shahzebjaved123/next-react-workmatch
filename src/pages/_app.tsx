import {NextIntlProvider} from 'next-intl'
import React from 'react'
import '../tailwindBaseStyle.css'
import {FilterContextProvider, useFilterContext} from 'src/context/FilterContext'
import { CardJson } from 'src/modules/styleGuide/fe/1presentation/tilesCards/CardJson'


const MyApp = ({Component, pageProps: {session, messages, now, ...pageProps}}) => {
  return (
    <NextIntlProvider messages={messages} now={new Date(now)} formats={{
      dateTime: {
        short: {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }
      }
    }}>
      <FilterContextProvider>
        <Component {...pageProps} />
        <ShowSelectedFilter />
      </FilterContextProvider>
    </NextIntlProvider>
  )
}

const ShowSelectedFilter = () => {
  const filters = useFilterContext()
  return <CardJson header={'selectedFilters'} obj={filters} />
}


export default MyApp
