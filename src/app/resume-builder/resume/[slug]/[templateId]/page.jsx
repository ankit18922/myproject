"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

import DefaultTemplate from "./DefaultTemplate"
import PlaneTemplate from "./PlaneTemplate"
import Template1 from "./Template1"
import Template2 from "./Template2"
import Template3 from "./Template3"

export default function BuilderPage() {

  const params = useParams()

  const [templateId, setTemplateId] = useState(null)
  const [formData, setFormData] = useState({})   // ✅ ADD THIS

  useEffect(() => {
    if (params?.templateId) {
      setTemplateId(params.templateId)
    }
  }, [params])

  if (!templateId) return null

  return (
    <div className="min-h-screen p-6 bg-background">

      {templateId === "planetemplate" && <PlaneTemplate formdata={formData} />}
      {templateId === "template1" && <Template1 formdata={formData} />}
      {templateId === "template2" && <Template2 formdata={formData} />}
      {templateId === "template3" && <Template3 formdata={formData} />}

    </div>
  )
}
