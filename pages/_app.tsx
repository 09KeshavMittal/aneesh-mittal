import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import ReactBricksApp from '../components/ReactBricksApp'
// import DisclaimerPopup from '../components/DisclaimerPopup'
import '../css/styles.css'

const MyApp = (props: AppProps) => {
  return (
    <ThemeProvider
      attribute="class"
      storageKey="color-mode"
      enableSystem={false}
      defaultTheme="light"
    >
      {/* <DisclaimerPopup />  */}
      <ReactBricksApp {...props}></ReactBricksApp>
    </ThemeProvider>
  )
}

export default MyApp
