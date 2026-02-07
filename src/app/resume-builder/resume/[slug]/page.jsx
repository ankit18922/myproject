"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BuilderPage from "./[templateId]/page"
import planetemplate from "@/assets/templates/planetemplate.png"

import DefaultTemplate from "./[templateId]/DefaultTemplate"
import PlaneTemplate from "./[templateId]/PlaneTemplate"
import Template3 from "./[templateId]/Template3"
import Template1 from "./[templateId]/Template1"
import Template2 from "./[templateId]/Template2"
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
import { useParams } from 'next/navigation';



export default function Resume() {
  const params = useParams();
  
  const [activeTab, setActiveTab] = useState("personal")
  const [formData, setFormData] = useState({
    personal: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      website: "",
      summary: "",
    },
    experience: [
      {
        id: 1,
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      },
    ],
    education: [
      {
        id: 1,
        degree: "",
        school: "",
        location: "",
        startDate: "",
        endDate: "",
        gpa: "",
      },
    ],
    skills: [""],
  })

  const updatePersonal = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }))
  }

  const updateExperience = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }))
  }

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now(),
          title: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          current: false,
          description: "",
        },
      ],
    }))
  }

  const removeExperience = (id) => {
    if (formData.experience.length > 1) {
      setFormData((prev) => ({
        ...prev,
        experience: prev.experience.filter((exp) => exp.id !== id),
      }))
    }
  }

  const updateEducation = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }))
  }

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now(),
          degree: "",
          school: "",
          location: "",
          startDate: "",
          endDate: "",
          gpa: "",
        },
      ],
    }))
  }

  const removeEducation = (id) => {
    if (formData.education.length > 1) {
      setFormData((prev) => ({
        ...prev,
        education: prev.education.filter((edu) => edu.id !== id),
      }))
    }
  }

  const updateSkill = (index, value) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill, i) => (i === index ? value : skill)),
    }))
  }

  const addSkill = () => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, ""],
    }))
  }

  const removeSkill = (index) => {
    if (formData.skills.length > 1) {
      setFormData((prev) => ({
        ...prev,
        skills: prev.skills.filter((_, i) => i !== index),
      }))
    }
  }

  const tabs = [
    { id: "personal", label: "Personal", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Wrench },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Builder Section */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Panel */}
            <div className="animate-slide-in-left">
              <Card className="border-0 shadow-xl shadow-primary/5 overflow-hidden top-24">
                <CardHeader className="gradient-primary text-white flex justify-center py-3">
                  <CardTitle className="flex items-center gap-2 leading-none">
                    <Sparkles className="w-5 h-5 mt-[1px]" />
                    <span className="relative top-[1px]">Resume Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="w-full justify-start rounded-none border-b bg-muted/30 p-0 h-auto">
                      {tabs.map((tab) => (
                        <TabsTrigger
                          key={tab.id}
                          value={tab.id}
                          className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-4 data-[state=active]:shadow-none"
                        >
                          <tab.icon className="w-4 h-4 mr-2" />
                          <span className="hidden sm:inline">{tab.label}</span>
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {/* Personal Info Tab */}
                    <TabsContent value="personal" className="p-6 space-y-6 mt-0">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="flex font-bold items-center gap-2">
                            <User className="w-4 h-4 text-primary" />
                            Full Name
                          </Label>
                          <Input
                            placeholder="John Doe"
                            value={formData.personal.fullName}
                            onChange={(e) => updatePersonal("fullName", e.target.value)}
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="flex font-bold items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            Email
                          </Label>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            value={formData.personal.email}
                            onChange={(e) => updatePersonal("email", e.target.value)}
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="flex font-bold items-center gap-2">
                            <Phone className="w-4 h-4 text-primary" />
                            Phone
                          </Label>
                          <Input
                            placeholder="+1 (555) 000-0000"
                            value={formData.personal.phone}
                            onChange={(e) => updatePersonal("phone", e.target.value)}
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="flex font-bold items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            Location
                          </Label>
                          <Input
                            placeholder="San Francisco, CA"
                            value={formData.personal.location}
                            onChange={(e) => updatePersonal("location", e.target.value)}
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="flex font-bold items-center gap-2">
                            <Linkedin className="w-4 h-4 text-primary" />
                            LinkedIn
                          </Label>
                          <Input
                            placeholder="linkedin.com/in/johndoe"
                            value={formData.personal.linkedin}
                            onChange={(e) => updatePersonal("linkedin", e.target.value)}
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="flex font-bold items-center gap-2">
                            <Globe className="w-4 h-4 text-primary" />
                            Website
                          </Label>
                          <Input
                            placeholder="johndoe.com"
                            value={formData.personal.website}
                            onChange={(e) => updatePersonal("website", e.target.value)}
                            className="border-border/50 focus:border-primary"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="font-bold">Professional Summary</Label>
                        <Textarea
                          placeholder="Write a brief summary of your professional background and career goals..."
                          rows={4}
                          value={formData.personal.summary}
                          onChange={(e) => updatePersonal("summary", e.target.value)}
                          className="border-border/50 focus:border-primary resize-none"
                        />
                      </div>
                      <Button onClick={() => setActiveTab("experience")} className="w-full gradient-primary text-white border-0">
                        Continue to Experience
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </TabsContent>

                    {/* Experience Tab */}
                    <TabsContent value="experience" className="p-6 space-y-6 mt-0">
                      {formData.experience.map((exp, index) => (
                        <div key={exp.id} className="p-4 rounded-xl bg-muted/30 border border-border/50 space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-md gradient-text">Experience {index + 1}</h4>
                            {formData.experience.length > 1 && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeExperience(exp.id)}
                                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label className="font-bold">Job Title</Label>
                              <Input
                                placeholder="Software Engineer"
                                value={exp.title}
                                onChange={(e) => updateExperience(exp.id, "title", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="font-bold">Company</Label>
                              <Input
                                placeholder="Tech Corp"
                                value={exp.company}
                                onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="font-bold">Start Date</Label>
                              <Input
                                type="month"
                                value={exp.startDate}
                                onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="font-bold">End Date</Label>
                              <Input
                                type="month"
                                value={exp.endDate}
                                onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                                disabled={exp.current}
                                placeholder={exp.current ? "Present" : ""}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label className="font-bold">Description</Label>
                            <Textarea
                              placeholder="Describe your responsibilities and achievements..."
                              rows={3}
                              value={exp.description}
                              onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                              className="resize-none"
                            />
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" onClick={addExperience} className="w-full border-dashed border-2 hover:border-primary hover:bg-primary/5 bg-transparent">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Another Experience
                      </Button>
                      <Button onClick={() => setActiveTab("education")} className="w-full gradient-primary text-white border-0">
                        Continue to Education
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </TabsContent>

                    {/* Education Tab */}
                    <TabsContent value="education" className="p-6 space-y-6 mt-0">
                      {formData.education.map((edu, index) => (
                        <div key={edu.id} className="p-4 rounded-xl bg-muted/30 border border-border/50 space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-sm gradient-text">Education {index + 1}</h4>
                            {formData.education.length > 1 && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeEducation(edu.id)}
                                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label className="font-bold">Degree</Label>
                              <Input
                                placeholder="Bachelor of Science"
                                value={edu.degree}
                                onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="font-bold">School</Label>
                              <Input
                                placeholder="University Name"
                                value={edu.school}
                                onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="font-bold">Start Date</Label>
                              <Input
                                type="month"
                                value={edu.startDate}
                                onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="font-bold">End Date</Label>
                              <Input
                                type="month"
                                value={edu.endDate}
                                onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" onClick={addEducation} className="w-full border-dashed border-2 hover:border-primary hover:bg-primary/5 bg-transparent">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Another Education
                      </Button>
                      <Button onClick={() => setActiveTab("skills")} className="w-full gradient-primary text-white border-0">
                        Continue to Skills
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </TabsContent>

                    {/* Skills Tab */}
                    <TabsContent value="skills" className="p-6 space-y-6 mt-0">
                      <div className="space-y-3">
                        {formData.skills.map((skill, index) => (
                          <div key={index} className="flex gap-2">
                            <Input
                              placeholder="e.g., JavaScript, React, Project Management"
                              value={skill}
                              onChange={(e) => updateSkill(index, e.target.value)}
                              className="flex-1"
                            />
                            {formData.skills.length > 1 && (
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeSkill(index)}
                                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" onClick={addSkill} className="w-full border-dashed border-2 hover:border-primary hover:bg-primary/5 bg-transparent">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Skill
                      </Button>
                      <div className="flex gap-3">
                        <Button variant="outline" className="flex-1 bg-transparent">
                          <Save className="w-4 h-4 mr-2" />
                          Save Draft
                        </Button>
                        <Button className="flex-1 gradient-primary text-white border-0">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Preview Panel */}
            <div className="animate-slide-in-right">
              <Card className="border-0 shadow-xl shadow-primary/5 sticky bg-muted/30 min-h-600!">
                <CardHeader className="flex flex-row items-center justify-between bg-muted/30 border-b px-6">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Eye className="w-5 h-5 text-primary relative top-[4px]" />
                    <span className="relative top-[4px]"> Live Preview</span>
                  </CardTitle>
                  <div className="flex gap-2 relative top-[4px] mt-1">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Eye className="w-4 h-4 mr-1" />
                      Preview
                    </Button>
                    <Button size="sm" className="gradient-primary text-white border-0">
                      <Download className="w-4 h-4 mr-1" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="bg-white rounded-lg shadow-inner border p-8 min-h-[400px]">
                    {/* <DefaultTemplate formdata={formData}/> */}
                    {/* <PlaneTemplate formdata={formData} /> */}
                    {/* <Template3 formdata={formData} /> */}
                    <Template1 formdata={formData} />
                    {/* <Template2 formdata={formData} /> */}
                      {/* <BuilderPage formdata={formData} /> */}
                  </div>
                  
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </div>
  )
}
