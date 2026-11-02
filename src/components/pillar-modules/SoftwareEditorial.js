/**
 * SoftwareEditorial.js
 * Bespoke UI/UX Layout for Software Design & Cloud Architecture
 * Reference: Linear.app, Vercel.com, Stripe.com
 * Features:
 * - Asymmetrical Architectural Bento Grid (NOT 4 equal cards)
 * - Live Code & Kubernetes Pods Terminal Block
 * - Interactive Technology Stack Taxonomy Directory
 */

export function renderSoftwareEditorial() {
  return `
    <div class="software-editorial-stage max-w-6xl mx-auto px-4 mb-24">
      
      <!-- SECTION HEADER -->
      <div class="flex items-center justify-between mb-8 pb-4 border-b border-black/10">
        <div>
          <p class="!font-mono text-xs text-black/50 uppercase tracking-widest mb-1">ARCHITECTURAL SPECIFICATIONS</p>
          <h3 class="text-3xl sm:text-4xl font-light text-black !font-mono">
            Enterprise Cloud & Software Bento Grid
          </h3>
        </div>
        <span class="hidden sm:inline text-xs !font-mono text-[#4E71FF] font-medium">Bespoke Engineering Pods</span>
      </div>

      <!-- ASYMMETRICAL BENTO GRID -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-16">
        
        <!-- CARD A: MICROSERVICES & LIVE TERMINAL (7 COLS) -->
        <div class="md:col-span-7 rounded-2xl bg-[#0D1117] text-white p-8 lg:p-10 border border-white/10 shadow-xl flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-6">
              <span class="text-xs !font-mono text-[#4E71FF] uppercase tracking-wider font-semibold">01 / CLOUD-NATIVE MICROSERVICES</span>
              <span class="text-[10px] !font-mono text-[#00E599] bg-[#00E599]/10 px-2 py-0.5 rounded">sub-50ms TTFB</span>
            </div>
            <h4 class="text-2xl sm:text-3xl font-light text-white !font-mono mb-4">
              High-Concurrency Distributed Go & Node.js Pods
            </h4>
            <p class="text-sm text-white/70 font-light leading-relaxed mb-6">
              Containerized microservices running on auto-scaling Kubernetes clusters. Envoy proxy ingress handles distributed rate-limiting, mutual TLS encryption, and sub-millisecond gRPC communication between internal services.
            </p>
          </div>

          <!-- MOCK TERMINAL CODE BLOCK -->
          <div class="rounded-xl bg-black/60 border border-white/10 p-4 font-mono text-xs text-white/80 overflow-x-auto">
            <div class="flex items-center gap-2 mb-3 pb-2 border-b border-white/10 text-[11px] text-white/40">
              <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              <span class="ml-2 text-white/60">cluster.ingress.arka-internal.vpc</span>
            </div>
            <pre class="leading-relaxed"><span class="text-pink-400">service</span> <span class="text-[#00E599]">OrderExecutionEngine</span> {
  <span class="text-cyan-400">rpc</span> ExecuteTransaction(OrderRequest) <span class="text-pink-400">returns</span> (ExecutionProof) {
    <span class="text-white/40">// Latency target: &lt; 25ms P99 | Multi-AZ Failover</span>
    <span class="text-amber-400">option</span> (envoy.rate_limit) = <span class="text-cyan-300">100_000_rps</span>;
  }
}</pre>
          </div>
        </div>

        <!-- CARD B: 120FPS FLUID UI/UX DESIGN TOKENS (5 COLS) -->
        <div class="md:col-span-5 rounded-2xl bg-[#FAFAFA] border border-black/10 p-8 lg:p-10 flex flex-col justify-between hover:border-black/30 transition-all">
          <div>
            <span class="text-xs !font-mono text-black/50 uppercase tracking-wider block mb-4 font-semibold">02 / PRODUCT DESIGN TOKENS</span>
            <h4 class="text-2xl font-light text-black !font-mono mb-3">
              120fps Fluid Interaction Choreography
            </h4>
            <p class="text-sm text-black/70 font-light leading-relaxed mb-6">
              Automated Figma-to-code design token pipelines. Micro-animations, gesture-driven touch curves, and strict WCAG 2.1 AA accessibility standards synchronized with React and SwiftUI libraries.
            </p>
          </div>

          <!-- INTERACTIVE TOKEN PILL CHIPS -->
          <div class="p-4 rounded-xl bg-white border border-black/10 text-xs !font-mono space-y-2.5">
            <div class="flex justify-between items-center pb-2 border-b border-black/5">
              <span class="text-black/50">Motion Ease:</span>
              <span class="text-[#4E71FF] font-medium">cubic-bezier(0.16, 1, 0.3, 1)</span>
            </div>
            <div class="flex justify-between items-center pb-2 border-b border-black/5">
              <span class="text-black/50">Type Scale:</span>
              <span class="text-black font-medium">Fluid Modular (1.25 Ratio)</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-black/50">Touch Target:</span>
              <span class="text-[#00E599] font-medium">48px Ergonomic Minimum</span>
            </div>
          </div>
        </div>

        <!-- CARD C: HIGH-THROUGHPUT DATABASE ARCHITECTURE (5 COLS) -->
        <div class="md:col-span-5 rounded-2xl bg-[#FAFAFA] border border-black/10 p-8 lg:p-10 flex flex-col justify-between hover:border-black/30 transition-all">
          <div>
            <span class="text-xs !font-mono text-black/50 uppercase tracking-wider block mb-4 font-semibold">03 / DATABASE HA & CACHE</span>
            <h4 class="text-2xl font-light text-black !font-mono mb-3">
              PostgreSQL HA & Distributed Redis
            </h4>
            <p class="text-sm text-black/70 font-light leading-relaxed mb-6">
              ACID-compliant primary-replica database topologies with connection pooling (PgBouncer), automatic failover, and Redis 7.2 in-memory caching for sub-millisecond session state.
            </p>
          </div>
          <div class="flex items-center justify-between text-xs !font-mono pt-4 border-t border-black/10 text-black/70">
            <span>Replication Lag: &lt; 10ms</span>
            <span class="text-[#00E599] font-medium">Multi-Region Synced</span>
          </div>
        </div>

        <!-- CARD D: NATIVE MOBILE (SWIFT & KOTLIN) (7 COLS) -->
        <div class="md:col-span-7 rounded-2xl bg-[#FAFAFA] border border-black/10 p-8 lg:p-10 flex flex-col justify-between hover:border-black/30 transition-all">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs !font-mono text-black/50 uppercase tracking-wider font-semibold">04 / NATIVE MOBILE ENGINEERING</span>
              <span class="text-[10px] !font-mono text-[#4E71FF] bg-[#4E71FF]/10 px-2 py-0.5 rounded">iOS & Android</span>
            </div>
            <h4 class="text-2xl sm:text-3xl font-light text-black !font-mono mb-3">
              SwiftUI & Jetpack Compose Offline-First Engines
            </h4>
            <p class="text-sm text-black/70 font-light leading-relaxed mb-6">
              Zero-latency platform fidelity utilizing hardware acceleration, local SQLite/Room caching with conflict-free replicated data types (CRDTs), and biometric authentication.
            </p>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs !font-mono pt-4 border-t border-black/10 text-black/70">
            <div>
              <span class="text-black/40 block text-[10px]">iOS Platform</span>
              <span class="font-medium text-black">Swift & SwiftUI</span>
            </div>
            <div>
              <span class="text-black/40 block text-[10px]">Android</span>
              <span class="font-medium text-black">Kotlin Compose</span>
            </div>
            <div>
              <span class="text-black/40 block text-[10px]">Local Sync</span>
              <span class="font-medium text-[#00E599]">CRDT Offline</span>
            </div>
            <div>
              <span class="text-black/40 block text-[10px]">Store Rollout</span>
              <span class="font-medium text-black">Zero-Rejection</span>
            </div>
          </div>
        </div>

      </div>

      <!-- TECHNOLOGY STACK TAXONOMY PILLS -->
      <div class="p-8 rounded-2xl bg-neutral-50 border border-black/10">
        <p class="text-xs !font-mono opacity-50 uppercase tracking-widest mb-4">ENTERPRISE TECH STACK RUNNING IN PRODUCTION</p>
        <div class="flex flex-wrap gap-2.5">
          <span class="px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-xs !font-mono text-black">TypeScript 5.4</span>
          <span class="px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-xs !font-mono text-black">Go (Golang 1.22)</span>
          <span class="px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-xs !font-mono text-black">Next.js 14 (App Router)</span>
          <span class="px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-xs !font-mono text-black">Kubernetes (K8s)</span>
          <span class="px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-xs !font-mono text-black">Docker Containerization</span>
          <span class="px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-xs !font-mono text-black">PostgreSQL 16 HA</span>
          <span class="px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-xs !font-mono text-black">Redis 7.2 Cluster</span>
          <span class="px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-xs !font-mono text-black">Terraform (IaC)</span>
          <span class="px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-xs !font-mono text-black">SwiftUI (iOS 17+)</span>
          <span class="px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-xs !font-mono text-black">Kotlin Jetpack Compose</span>
          <span class="px-3.5 py-1.5 rounded-lg bg-white border border-black/10 text-xs !font-mono text-black">AWS & Google Cloud Platform</span>
        </div>
      </div>

    </div>
  `;
}
