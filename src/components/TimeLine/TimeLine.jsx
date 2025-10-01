import React from "react";
import { Calendar, Building2 } from "lucide-react";
import FadeContent from "@/components/FadeContent/FadeContent";

/**
 * items: Array de objetos con esta forma:
 * { title: string, date: string, description: string, company?: string }
 */
export default function Timeline({ items = [] }) {
  return (
    <section className="w-full flex justify-center px-4 py-10">
      <div className="relative w-full max-w-5xl">
        {/* Línea vertical fija (mismo diseño siempre) */}
        <div className="pointer-events-none absolute top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-white/10 via-white/20 to-white/10 left-4 sm:left-5 md:left-6" />

        {items.map((item, i) => (
          <article key={i} className="relative mt-8 first:mt-0 pl-12 sm:pl-14 md:pl-16">
            {/* Punto centrado sobre la línea */}
            <span className="absolute top-6 left-4 sm:left-5 md:left-6 -translate-x-1/2 inline-flex items-center justify-center">
              <span className="absolute h-6 w-6 rounded-full bg-yellow-200/10 blur-[4px]" />
              <span className="relative h-4 w-4 rounded-full bg-yellow-200 ring-4 ring-yellow-200/20" />
            </span>

            {/* Tarjeta (diseño fijo) */}
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl shadow-black/20 ring-1 ring-white/10">
                <div className="grid gap-4 p-4 sm:p-5 md:p-6 md:grid-cols-[minmax(200px,260px)_1fr]">
                  {/* Columna izquierda */}
                  <div className="space-y-2 min-w-0">
                    <h2 className="text-[16px] sm:text-[17px] font-semibold text-yellow-200 break-words">
                      {item.title}
                    </h2>

                    {item.company ? (
                      <div className="flex items-center gap-2 text-sm sm:text-[15px] font-semibold text-gray-100">
                          <Building2 className="h-4 w-4 shrink-0" />
                          <span className="break-words">{item.company}</span>
                      </div>
                      ) : null}

                      <div className="flex items-center gap-2 text-xs sm:text-[12px] text-gray-400">
                      <Calendar className="h-3.5 w-3.5 shrink-0" />
                      <span>{item.date}</span>
                      </div>

                  </div>

                  {/* Columna derecha */}
                  <div className="min-w-0">
                    <p className="text-[13px] leading-relaxed text-gray-200 whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeContent>
          </article>
        ))}
      </div>
    </section>
  );
}
