import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider, styled } from 'baseui'
// import { StatefulMenu } from 'baseui/menu'
import { Button } from 'baseui/button'
import './App.css'

const engine = new Styletron()
const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
})

// function itemClick(item) {
//   console.log('item :', item.item)
// }

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <Button>Test Button</Button>
          {/* <StatefulMenu
            items={[
              { label: 'Item One' },
              { label: 'Item Two' },
              { label: 'Item Three' },
              { label: 'Item Four' },
            ]}
            onItemSelect={itemClick}
          /> */}
        </Centered>
      </BaseProvider>
    </StyletronProvider>
  )
}

export default App
