import { gsap } from 'gsap';

/**
 * CloudTopologyMap.js
 * Reference: Linear.app, Vercel.com, Stripe.com
 * Reverse-engineered interactive cloud architecture topology node map with real-time latency telemetry
 */

export function renderCloudTopologyMap() {
  return `
    <div class="cloud-topology-container w-full max-w-6xl mx-auto px-4 my-20">
      
      <!-- HEADER -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-black/10">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="w-2 h-2 rounded-full bg-[#00E599] animate-pulse"></span>
            <p class="!font-mono text-xs text-black/60 uppercase tracking-widest">ENTERPRISE TOPOLOGY • SYSTEM ARCHITECTURE</p>
          </div>
          <h3 class="text-3xl sm:text-4xl font-light text-black !font-mono tracking-tight">
            High-Throughput Distributed Cloud Map
          </h3>
        </div>
        <div class="mt-4 md:mt-0 flex items-center gap-3">
          <span class="text-xs !font-mono text-black/60 uppercase">Load Profile:</span>
          <div class="inline-flex rounded-lg border border-black/15 bg-neutral-100 p-1 text-xs !font-mono">
            <button id="topo-load-normal" class="px-3 py-1.5 rounded-md font-medium bg-black text-white shadow-sm transition-all">Normal (2.4k rps)</button>
            <button id="topo-load-peak" class="px-3 py-1.5 rounded-md font-medium text-black/70 hover:text-black transition-all">Peak Spike (95k rps)</button>
          </div>
        </div>
      </div>

      <!-- MAIN TOPOLOGY CANVAS STAGE -->
      <div class="relative w-full rounded-2xl bg-[#0B0F19] text-white p-6 sm:p-10 overflow-hidden border border-white/10 shadow-2xl">
        
        <!-- Subtle Grid Background -->
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f293d25_1px,transparent_1px),linear-gradient(to_bottom,#1f293d25_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
        <div class="absolute -right-20 -top-20 w-96 h-96 bg-[#4E71FF]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -left-20 -bottom-20 w-96 h-96 bg-[#00E599]/15 rounded-full blur-3xl pointer-events-none"></div>

        <!-- TOP METRICS BAR -->
        <div class="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 pb-6 border-b border-white/10 text-xs !font-mono">
          <div>
            <span class="text-white/40 uppercase block mb-1">Global Health</span>
            <span class="text-[#00E599] font-medium flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#00E599]"></span> 99.998% Uptime
            </span>
          </div>
          <div>
            <span class="text-white/40 uppercase block mb-1">Blended P99 Latency</span>
            <span id="topo-metric-p99" class="text-white font-medium text-sm">34.2 ms</span>
          </div>
          <div>
            <span class="text-white/40 uppercase block mb-1">Current Throughput</span>
            <span id="topo-metric-rps" class="text-white font-medium text-sm">2,410 req/s</span>
          </div>
          <div>
            <span class="text-white/40 uppercase block mb-1">Fault Isolation</span>
            <span class="text-[#4E71FF] font-medium">Multi-AZ Active</span>
          </div>
        </div>

        <!-- NODES PIPELINE LAYOUT -->
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 items-stretch">
          
          <!-- Node 1: Edge CDN -->
          <div class="topo-node-card cursor-pointer group rounded-xl p-5 bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-[#4E71FF] transition-all relative" data-node="edge">
            <div class="flex items-center justify-between mb-4">
              <div class="w-9 h-9 rounded-lg bg-[#4E71FF]/20 text-[#4E71FF] flex items-center justify-center font-mono font-bold text-sm">01</div>
              <span class="node-status-badge text-[10px] !font-mono text-[#00E599] bg-[#00E599]/10 px-2 py-0.5 rounded-full">11ms P99</span>
            </div>
            <h4 class="font-medium text-white text-base mb-1">Global Edge CDN</h4>
            <p class="text-xs text-white/50 leading-relaxed font-light mb-4">Cloudflare / Fastly Anycast edge network with 180+ global points of presence.</p>
            <div class="text-[11px] !font-mono text-white/70 pt-3 border-t border-white/10 flex justify-between">
              <span>SSL Handshake</span>
              <span class="text-[#00E599]">2.1ms</span>
            </div>
          </div>

          <!-- Node 2: API Gateway -->
          <div class="topo-node-card cursor-pointer group rounded-xl p-5 bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-[#4E71FF] transition-all relative" data-node="gateway">
            <div class="flex items-center justify-between mb-4">
              <div class="w-9 h-9 rounded-lg bg-[#FF9900]/20 text-[#FF9900] flex items-center justify-center font-mono font-bold text-sm">02</div>
              <span class="node-status-badge text-[10px] !font-mono text-[#00E599] bg-[#00E599]/10 px-2 py-0.5 rounded-full">18ms P99</span>
            </div>
            <h4 class="font-medium text-white text-base mb-1">API & Auth Proxy</h4>
            <p class="text-xs text-white/50 leading-relaxed font-light mb-4">Envoy proxy routing, rate limiting, OAuth2 / JWT authentication, and request sanitization.</p>
            <div class="text-[11px] !font-mono text-white/70 pt-3 border-t border-white/10 flex justify-between">
              <span>Auth Overhead</span>
              <span class="text-[#00E599]">1.4ms</span>
            </div>
          </div>

          <!-- Node 3: Microservices -->
          <div class="topo-node-card cursor-pointer group rounded-xl p-5 bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-[#4E71FF] transition-all relative" data-node="services">
            <div class="flex items-center justify-between mb-4">
              <div class="w-9 h-9 rounded-lg bg-[#00E599]/20 text-[#00E599] flex items-center justify-center font-mono font-bold text-sm">03</div>
              <span class="node-status-badge text-[10px] !font-mono text-[#00E599] bg-[#00E599]/10 px-2 py-0.5 rounded-full">32ms P99</span>
            </div>
            <h4 class="font-medium text-white text-base mb-1">Compute Pods</h4>
            <p class="text-xs text-white/50 leading-relaxed font-light mb-4">Containerized Go & Node.js microservices with horizontal auto-scaling on Kubernetes.</p>
            <div class="text-[11px] !font-mono text-white/70 pt-3 border-t border-white/10 flex justify-between">
              <span>Pods Active</span>
              <span id="topo-pods-count" class="text-white">12 Pods</span>
            </div>
          </div>

          <!-- Node 4: Cache -->
          <div class="topo-node-card cursor-pointer group rounded-xl p-5 bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-[#4E71FF] transition-all relative" data-node="cache">
            <div class="flex items-center justify-between mb-4">
              <div class="w-9 h-9 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center font-mono font-bold text-sm">04</div>
              <span class="node-status-badge text-[10px] !font-mono text-[#00E599] bg-[#00E599]/10 px-2 py-0.5 rounded-full">1.2ms P99</span>
            </div>
            <h4 class="font-medium text-white text-base mb-1">Redis Cluster</h4>
            <p class="text-xs text-white/50 leading-relaxed font-light mb-4">Sub-millisecond in-memory session states, distributed locks, and real-time pub/sub.</p>
            <div class="text-[11px] !font-mono text-white/70 pt-3 border-t border-white/10 flex justify-between">
              <span>Cache Hit Ratio</span>
              <span class="text-[#00E599]">98.7%</span>
            </div>
          </div>

          <!-- Node 5: Database -->
          <div class="topo-node-card cursor-pointer group rounded-xl p-5 bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-[#4E71FF] transition-all relative" data-node="database">
            <div class="flex items-center justify-between mb-4">
              <div class="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">05</div>
              <span class="node-status-badge text-[10px] !font-mono text-[#00E599] bg-[#00E599]/10 px-2 py-0.5 rounded-full">4.8ms P99</span>
            </div>
            <h4 class="font-medium text-white text-base mb-1">PostgreSQL HA</h4>
            <p class="text-xs text-white/50 leading-relaxed font-light mb-4">Primary-replica topology with automatic failover, ACID compliance, and pgvector search.</p>
            <div class="text-[11px] !font-mono text-white/70 pt-3 border-t border-white/10 flex justify-between">
              <span>Replication Lag</span>
              <span class="text-[#00E599]">&lt; 10ms</span>
            </div>
          </div>

        </div>

        <!-- INTERACTIVE TELEMETRY DRILLDOWN DRAWER -->
        <div id="topo-drilldown" class="relative z-10 mt-8 p-6 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p class="text-[10px] !font-mono uppercase tracking-widest text-white/40 mb-1">ARCHITECTURAL SPECIFICATION INSPECTOR</p>
              <h5 id="topo-inspect-title" class="text-lg font-medium text-white">Global Edge CDN (Node 01)</h5>
              <p id="topo-inspect-desc" class="text-xs text-white/70 mt-1 max-w-2xl font-light">
                Distributed SSL termination and smart routing directs inbound traffic to the nearest Noida or global edge point, serving static assets from memory and proxying dynamic requests via optimized TCP BBR protocol.
              </p>
            </div>
            <div class="flex items-center gap-6 shrink-0 text-xs !font-mono">
              <div>
                <span class="text-white/40 block text-[10px] uppercase">Throughput</span>
                <span id="topo-inspect-tput" class="text-[#00E599] font-medium text-sm">2,410 req/s</span>
              </div>
              <div>
                <span class="text-white/40 block text-[10px] uppercase">Latency</span>
                <span id="topo-inspect-latency" class="text-white font-medium text-sm">11.4 ms</span>
              </div>
              <div>
                <span class="text-white/40 block text-[10px] uppercase">Security</span>
                <span class="text-[#4E71FF] font-medium text-sm">mTLS & WAF</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  `;
}

export function initCloudTopologyMap() {
  const normalBtn = document.getElementById('topo-load-normal');
  const peakBtn = document.getElementById('topo-load-peak');
  const metricP99 = document.getElementById('topo-metric-p99');
  const metricRps = document.getElementById('topo-metric-rps');
  const podsCount = document.getElementById('topo-pods-count');
  const nodeCards = document.querySelectorAll('.topo-node-card');
  const inspectTitle = document.getElementById('topo-inspect-title');
  const inspectDesc = document.getElementById('topo-inspect-desc');
  const inspectTput = document.getElementById('topo-inspect-tput');
  const inspectLatency = document.getElementById('topo-inspect-latency');

  const nodeData = {
    edge: {
      title: 'Global Edge CDN (Node 01)',
      desc: 'Distributed SSL termination and smart routing directs inbound traffic to the nearest Noida or global edge point, serving static assets from memory and proxying dynamic requests via optimized TCP BBR protocol.',
      normal: { tput: '2,410 req/s', latency: '11.4 ms' },
      peak: { tput: '94,800 req/s', latency: '14.2 ms' }
    },
    gateway: {
      title: 'API & Auth Proxy (Node 02)',
      desc: 'High-speed Envoy proxy layer handles JWT token validation, distributed rate limiting, and CORS headers before forwarding requests to internal private VPC service meshes.',
      normal: { tput: '2,410 req/s', latency: '18.1 ms' },
      peak: { tput: '94,800 req/s', latency: '22.6 ms' }
    },
    services: {
      title: 'Compute Pods Cluster (Node 03)',
      desc: 'Zero-downtime rolling deployments across Go and Node.js microservices. Auto-horizontal pod scaler (HPA) dynamically triggers container spins based on CPU and memory thresholds.',
      normal: { tput: '2,410 req/s', latency: '32.0 ms' },
      peak: { tput: '94,800 req/s', latency: '44.8 ms' }
    },
    cache: {
      title: 'Redis 7.2 Distributed Cache (Node 04)',
      desc: 'Cluster of multi-threaded Redis nodes with active replication. Handles cached search queries, session state management, and real-time rate limiter counters with sub-2ms response.',
      normal: { tput: '7,800 ops/s', latency: '1.2 ms' },
      peak: { tput: '280,000 ops/s', latency: '1.8 ms' }
    },
    database: {
      title: 'PostgreSQL HA with Read Replicas (Node 05)',
      desc: 'ACID-compliant primary-replica database topology with connection pooling (PgBouncer), automatic zero-loss failover, and pgvector embeddings for rapid semantic query lookups.',
      normal: { tput: '850 qps', latency: '4.8 ms' },
      peak: { tput: '18,400 qps', latency: '8.1 ms' }
    }
  };

  let isPeak = false;
  let activeNode = 'edge';

  function updateLoad(peak) {
    isPeak = peak;
    if (peak) {
      peakBtn?.classList.add('bg-black', 'text-white', 'shadow-sm');
      peakBtn?.classList.remove('text-black/70');
      normalBtn?.classList.remove('bg-black', 'text-white', 'shadow-sm');
      normalBtn?.classList.add('text-black/70');

      if (metricP99) metricP99.textContent = '44.8 ms';
      if (metricRps) metricRps.textContent = '94,800 req/s';
      if (podsCount) podsCount.textContent = '64 Pods (Scaled)';
    } else {
      normalBtn?.classList.add('bg-black', 'text-white', 'shadow-sm');
      normalBtn?.classList.remove('text-black/70');
      peakBtn?.classList.remove('bg-black', 'text-white', 'shadow-sm');
      peakBtn?.classList.add('text-black/70');

      if (metricP99) metricP99.textContent = '34.2 ms';
      if (metricRps) metricRps.textContent = '2,410 req/s';
      if (podsCount) podsCount.textContent = '12 Pods';
    }

    // Update inspector
    updateInspector(activeNode);
  }

  function updateInspector(nodeKey) {
    activeNode = nodeKey;
    const info = nodeData[nodeKey] || nodeData.edge;
    if (inspectTitle) inspectTitle.textContent = info.title;
    if (inspectDesc) inspectDesc.textContent = info.desc;

    const metrics = isPeak ? info.peak : info.normal;
    if (inspectTput) inspectTput.textContent = metrics.tput;
    if (inspectLatency) inspectLatency.textContent = metrics.latency;

    // Visual active highlight on cards
    nodeCards.forEach(c => {
      const match = c.getAttribute('data-node') === nodeKey;
      c.classList.toggle('border-[#4E71FF]', match);
      c.classList.toggle('bg-white/[0.12]', match);
    });
  }

  normalBtn?.addEventListener('click', () => updateLoad(false));
  peakBtn?.addEventListener('click', () => updateLoad(true));

  nodeCards.forEach(card => {
    card.addEventListener('click', () => {
      const nodeKey = card.getAttribute('data-node');
      if (nodeKey) updateInspector(nodeKey);
    });
  });

  // Initial highlight
  updateInspector('edge');
}
