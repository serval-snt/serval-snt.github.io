import React from "react"

import loadable from '@loadable/component'

const Covid19Component = loadable(() => import('../components/covid19-form'))

function LoadableCovid() {
  return (
    <div>
      <Covid19Component />
    </div>
  )
}

export default LoadableCovid