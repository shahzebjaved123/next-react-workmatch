import {GetStaticPaths, GetStaticProps} from 'next'
import {useTranslations} from 'next-intl'
import React from 'react'
import {Layout} from '@layout'
import {slugAsStringUndefined} from '@utils'
import {ICountry} from '../../modules/tasksCountries/sharedInterfaces/1-taks-interface'
import {getStaticPathsForCountries} from '../../modules/tasksCountries/fe/1presentation/6-bonus-task-nextjs-ssr-ssg'
import axios from 'axios'


interface IPageProps {
  country: ICountry
}

export const CountryDetailPage = ({country}: IPageProps) => {
  const t = useTranslations('Country')

  return (
    <Layout title={t('title') + ' ' + country.name}>
      Code: {country.code}<br/>
      Languages: {country.languages?.map((l, key) => (<span key={key}>{l.name}, </span>))}
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getStaticPathsForCountries(),
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async ({params, locale}) => {
  const code: string | undefined = slugAsStringUndefined(params?.code)

  const countryResponse = await (await axios.get(`http://localhost:3000/api/countries/${code}`)).data

  return {
    props: {
      country: countryResponse.data,
      messages: require(`localize/${locale}.json`)
    }
  }
}

export default CountryDetailPage
