'use client'
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Testmonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const testimonials = [
    {
      quote: "Clear, thoughtful, and fast — Franklin made the whole process effortless.",
      author: "Olivia Tran",
      position: "Creative Director, Bloom Agency",
      image: "https://picsum.photos/200/200?random=1"
    },
    {
      quote: "Outstanding results that exceeded our expectations in every way.",
      author: "Marcus Chen", 
      position: "CEO, Tech Innovations",
      image: "https://picsum.photos/200/200?random=2"
    },
    {
      quote: "Professional, reliable, and delivered exactly what we needed.",
      author: "Sarah Johnson",
      position: "Marketing Director, Creative Co",
      image: "https://picsum.photos/200/200?random=3"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 bg-[#dcdcdc]">
      <div className="max-w-7xl mx-auto">
      <div className="text-center ">
      {/* Small Subtext */}
      <p className="text-gray-500 text-lg mb-4">(Why clients love Agero)</p>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-[11vw] font-extrabold tracking-wider bg-gradient-to-b from-[#b7b7b7] to-[#d7d7d7] bg-clip-text text-transparent">
        Testimonials
      </h1>
    </div>

       {/* Content Grid */}
<div className="grid lg:grid-cols-10 gap-8 items-stretch">
  {/* Statistics Card (30%) */}
  <div
    className="lg:col-span-3 rounded-3xl p-12 text-white relative overflow-hidden"
    style={{
      backgroundImage: `url('https://picsum.photos/200/200?random=4')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="relative z-10 space-y-12">
      <div>
        <div className="text-6xl font-bold mb-2">26+</div>
        <div className="text-gray-300 text-lg">Finalized Projects</div>
      </div>

      <div>
        <div className="text-6xl font-bold mb-2">98%</div>
        <div className="text-gray-300 text-lg">Client satisfaction rate</div>
      </div>

      <div>
        <div className="text-6xl font-bold mb-2">10M</div>
        <div className="text-gray-300 text-lg">Gross Revenue</div>
      </div>
    </div>
  </div>

  {/* Testimonial Slider (70%) */}
  <div className="lg:col-span-7 relative rounded-3xl overflow-hidden h-full min-h-[500px]">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${testimonials[currentSlide].image})`,
      }}
    />
    <div className="absolute inset-0 bg-black/40" />

    <div className="relative z-10 p-12 h-full flex flex-col justify-between text-white">
      {/* Slide indicator */}
      <div className="text-right">
        <span className="text-sm opacity-75">
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(testimonials.length).padStart(2, "0")}
        </span>
      </div>

      {/* Quote */}
      <div className="flex-1 flex items-center">
        <blockquote className="text-2xl font-medium leading-relaxed">
          "{testimonials[currentSlide].quote}"
        </blockquote>
      </div>

      {/* Author and Navigation */}
      <div className="flex justify-between items-end">
        <div>
          <div className="font-semibold text-lg">
            {testimonials[currentSlide].author}
          </div>
          <div className="text-gray-300">
            {testimonials[currentSlide].position}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  )
}

export default Testmonial