import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import theme from '../lib/theme'
if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
    return (
        <Chakra cookies={pageProps.cookies} theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence
                    mode='wait'
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0 })
                        }
                    }}
                >
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </Chakra>
    )
}

export default Website