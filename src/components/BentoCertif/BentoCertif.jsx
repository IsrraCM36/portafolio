import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Filter,
  Search,
  X,
} from "lucide-react";

/**
 * Sección elegante y minimalista para presentar certificaciones (JSX puro).
 * - Tailwind CSS
 * - Framer Motion para animaciones
 * - Búsqueda, filtros (categoría/año) y ordenamiento
 * - Tarjetas con efecto glass/blur y modal de detalles
 */

const CATEGORIES = [
  { key: "all", label: "Todas" },
  { key: "dev", label: "Desarrollo" },
  { key: "cloud", label: "Cloud" },
  { key: "data", label: "Data" },
  { key: "uiux", label: "UI/UX" },
  { key: "other", label: "Otros" },
];

const SAMPLE = [
  {
    id: "aws-cp-01",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025-04-12",
    category: "cloud",
    skills: ["AWS", "Cloud Basics", "Well-Architected"],
    verifyUrl: "https://example.com/verify/aws-cp",
  },
  {
    id: "gcp-da-01",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "2024-11-28",
    category: "data",
    skills: ["SQL", "Dashboards", "ETL"],
    verifyUrl: "https://example.com/verify/gda",
  },
  {
    id: "react-adv-01",
    title: "React Avanzado y Patrones de Arquitectura",
    issuer: "Platzi",
    date: "2025-07-05",
    category: "dev",
    skills: ["React", "Hooks", "Performance"],
    verifyUrl: "https://example.com/verify/react-adv",
    fileUrl: "https://example.com/certs/react-adv.pdf",
    hours: 18,
  },
  {
    id: "ui-ux-01",
    title: "Fundamentos de Diseño de Interfaces",
    issuer: "Coursera",
    date: "2023-09-10",
    category: "uiux",
    skills: ["Figma", "Prototipado", "Accesibilidad"],
  },
  {
    id: "node-sec-01",
    title: "Seguridad en APIs con Node.js",
    issuer: "Udemy",
    date: "2024-02-20",
    category: "dev",
    skills: ["Node.js", "JWT", "OWASP"],
  },
  {
    id: "other-01",
    title: "Gestión del Tiempo para Developers",
    issuer: "Domestika",
    date: "2022-12-02",
    category: "other",
    skills: ["Productividad"],
  },
];

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

export default function CertificatesSection() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [year, setYear] = useState("all");
  const [sort, setSort] = useState("newest"); // "newest" | "oldest"
  const [quickView, setQuickView] = useState(null);

  const years = useMemo(() => {
    const ys = Array.from(
      new Set(SAMPLE.map((c) => new Date(c.date).getFullYear().toString()))
    ).sort((a, b) => Number(b) - Number(a));
    return ["all", ...ys];
  }, []);

  const filtered = useMemo(() => {
    let list = [...SAMPLE];

    if (category !== "all") list = list.filter((c) => c.category === category);

    if (year !== "all") list = list.filter((c) => c.date.startsWith(year));

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.issuer.toLowerCase().includes(q) ||
          (c.skills || []).some((s) => s.toLowerCase().includes(q))
      );
    }

    list.sort((a, b) =>
      sort === "newest"
        ? +new Date(b.date) - +new Date(a.date)
        : +new Date(a.date) - +new Date(b.date)
    );

    return list;
  }, [category, year, query, sort]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-950 via-black to-slate-900 text-neutral-100">
      {/* Patrón de puntos sutil + viñeta radial */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          color: "#1f2937", // slate-800 para el patrón
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16">
        {/* Encabezado */}
        <div className="mb-8 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Certificaciones</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-300">
              Un vistazo curado a mis certificaciones y cursos completados. Filtra por
              categoría, año o busca por palabra clave.
            </p>
          </div>

          {/* Controles rápidos */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="group relative">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md transition hover:bg-white/10">
                <Filter className="h-4 w-4 opacity-70" />
                <span className="text-sm opacity-90">Orden</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="ml-2 bg-transparent text-sm outline-none"
                >
                  <option className="bg-gray-900" value="newest">Más recientes</option>
                  <option className="bg-gray-900" value="oldest">Más antiguas</option>
                </select>
              </div>
            </div>

            <div className="group relative">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md transition hover:bg-white/10">
                <Calendar className="h-4 w-4 opacity-70" />
                <span className="text-sm opacity-90">Año</span>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="ml-2 bg-transparent text-sm outline-none"
                >
                  {years.map((y) => (
                    <option key={y} className="bg-gray-900" value={y}>
                      {y === "all" ? "Todos" : y}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de búsqueda + Categorías */}
        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por título, emisor o skill..."
              className="w-full rounded-xl border border-white/10 bg-white/5 py-2 pl-10 pr-10 text-sm outline-none placeholder:text-neutral-400 backdrop-blur-md transition focus:border-white/20 focus:bg-white/10"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 opacity-70 transition hover:bg-white/10 hover:opacity-100"
                aria-label="Limpiar búsqueda"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => setCategory(c.key)}
                className={
                  classNames(
                    "rounded-full px-3 py-1.5 text-xs font-medium transition",
                    "border backdrop-blur-md",
                    category === c.key
                      ? "border-white/20 bg-white/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  )
                }
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de tarjetas */}
        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c, idx) => (
            <motion.div
              key={c.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/30 backdrop-blur-xl"
            >
              {/* Halo sutil al hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.08), transparent 40%)",
                }}
              />

              <div className="relative flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/10">
                  <Award className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold leading-tight">{c.title}</h3>
                  <p className="mt-0.5 text-xs text-neutral-300">{c.issuer}</p>
                </div>
                <span className="ml-auto rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                  {new Date(c.date).getFullYear()}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {(c.skills || []).map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-neutral-200">
                    {s}
                  </span>
                ))}
              </div>

              {c.hours && (
                <div className="mt-2 flex items-center gap-1 text-xs text-neutral-300">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  {c.hours} h
                </div>
              )}

              <div className="mt-4 flex items-center gap-2">
                {c.verifyUrl && (
                  <a
                    href={c.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs transition hover:bg-white/10"
                  >
                    Ver credencial <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                {c.fileUrl && (
                  <a
                    href={c.fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs transition hover:bg-white/10"
                  >
                    Descargar <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setQuickView(c)}
                  className="ml-auto inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs transition hover:bg-white/10"
                >
                  Detalles <CheckCircle2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Estado vacío */}
        {filtered.length === 0 && (
          <div className="mt-16 grid place-items-center text-center">
            <div className="max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-sm text-neutral-300">No se encontraron certificaciones con los filtros actuales.</p>
            </div>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {quickView && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={() => setQuickView(null)}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur-2xl"
          >
            <button
              onClick={() => setQuickView(null)}
              className="absolute right-3 top-3 rounded-lg border border-white/10 bg-white/5 p-1.5 opacity-80 transition hover:bg-white/10"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-start gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/10">
                <Award className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold leading-tight">{quickView.title}</h3>
                <p className="mt-1 text-sm text-neutral-300">{quickView.issuer}</p>
                <p className="mt-1 text-xs text-neutral-400">
                  {new Date(quickView.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" })}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {(quickView.skills || []).map((s) => (
                <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-neutral-100">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {quickView.verifyUrl && (
                <a
                  href={quickView.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs transition hover:bg-white/10"
                >
                  Ver credencial <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              {quickView.fileUrl && (
                <a
                  href={quickView.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs transition hover:bg-white/10"
                >
                  Descargar <ChevronRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

/**
 * 👉 Cómo usar (JSX)
 * 1) Copia este componente en tu proyecto (p.ej. src/sections/CertificatesSection.jsx)
 * 2) Instala dependencias: npm i framer-motion lucide-react
 * 3) Importa y úsalo: <CertificatesSection />
 * 4) Reemplaza SAMPLE con tus datos reales (title, issuer, date, skills, verifyUrl, fileUrl, hours).
 */
