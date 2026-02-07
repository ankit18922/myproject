"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import planetemplate from "@/assets/templates/planetemplate.png"
import template1 from "@/assets/templates/template1.png"
import template2 from "@/assets/templates/template2.png"
import template3 from "@/assets/templates/template3.png"

import DefaultTemplate from "./resume/[slug]/[templateId]/DefaultTemplate"
import PlaneTemplate from "./resume/[slug]/[templateId]/PlaneTemplate"
import {
  User,
  Briefcase,
  GraduationCap,
  Wrench,
  Plus,
  Trash2,
  Download,
  Eye,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Save,
  FileText,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"


const templates = [
  { id: 'planetemplate', name: 'planetemplate', preview: planetemplate },
  { id: 'template1', name: 'template1', preview: template1 },
  { id: 'template2', name: 'template2', preview: template2 },
  { id: 'template3', name: 'template3', preview: template3 },
]

export default function ResumeBuilder() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-scale-in">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI Resume Builder</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-slide-up">
              Build Your <span className="gradient-text">Perfect Resume</span>
            </h1>
            <p className="text-muted-foreground text-lg animate-slide-up stagger-1">
              Create a professional, ATS-optimized resume in minutes with our intelligent builder.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
              Template <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-muted-foreground text-lg animate-slide-up stagger-1">
              Choose from modern, professional, and ATS-friendly resume templates.
            </p>
          </div>

          {/* Templates Grid */}
          <div className="flex flex-wrap gap-6 justify-center">
            {templates.map((t, index) => (
              <div
                key={t.id}
                style={{ height: 300, width: 200 }}
                className="group relative rounded-xl overflow-hidden 
                     bg-zinc-900 border border-white/10
                     shadow-lg hover:shadow-2xl
                     transition-all duration-500 ease-out
                     hover:-translate-y-3 aspect-[3/4]"
              >
                {/* Template Image */}
                <Image
                  src={t.preview}
                  alt={t.name}
                  className="w-full h-full object-cover
                       transition-all duration-500 ease-out
                       group-hover:scale-105
                       group-hover:opacity-40"
                />

                {/* Dark Overlay */}
                {/* <div
            className="absolute inset-0
                       bg-gradient-to-t from-black/80 via-black/40 to-transparent
                       opacity-0 group-hover:opacity-100
                       transition-all duration-500
                       flex flex-col items-center justify-center ease-out"
          /> */}

                {/* Content */}
                <div
                  className="absolute inset-0 flex flex-col bg-neutral-300 h-full
                       items-center justify-center pb-6
                       translate-y-6 opacity-0
                       group-hover:translate-y-0 group-hover:opacity-100
                       transition-all duration-500"
                >

                  <h3 className="text-black text-lg font-semibold mb-3 tracking-wide">
                    {t.name}
                  </h3>

                  <button
                    onClick={() => router.push(`/resume-builder/resume/${t.id}`)}
                    style={{ backgroundColor: "gray" }}
                    className=" bg-red-500 text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-all duration-300"
                  >
                    Use Template
                  </button>



                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
