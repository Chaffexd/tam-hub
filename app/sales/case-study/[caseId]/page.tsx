import React from 'react'

const CaseStudyPage = ({ params }: { params: { caseId: string }}) => {
  return (
    <div>This is a case study for {params.caseId}</div>
  )
}

export default CaseStudyPage