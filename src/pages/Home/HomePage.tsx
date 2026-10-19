import { Aquarium } from "./components/Aquarium"
import { Water } from "./components/Water"
import { BubbleField } from "./components/bubbles/BubbleField"
import { CreatureLayer } from "./components/layers/CreatureLayer"

import { FishSchool } from "./creatures/fish/FishSchool"
import { Squid } from "./creatures/squid/Squid"
import { CrabField } from "./creatures/crab/CrabField"
import { Starfish } from "./creatures/starfish/Starfish"

export function HomePage() {
  const SEABED_HEIGHT = 80 // percent

  return (
    <div className="relative h-full overflow-hidden bg-zinc-950">
      {/* ───────── Aquarium World ───────── */}
      <div className="relative h-full overflow-hidden">
        <Aquarium>
          {/* Environment */}
          <Water />
          <BubbleField />

          {/* Mid-water life */}
          <CreatureLayer depth={10}>
            <FishSchool />
            <Squid x={30} size={60} speed={40} />
            <Squid x={70} size={80} speed={55} />
          </CreatureLayer>

          {/* Bottom dwellers */}
          <CreatureLayer depth={20}>
            <CrabField groundY={SEABED_HEIGHT} />

            <Starfish x={20} y={SEABED_HEIGHT + 2} size={50} />
            <Starfish x={60} y={SEABED_HEIGHT + 4} size={40} />
          </CreatureLayer>


          {/* Subtle seabed / horizon line */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
        </Aquarium>
      </div>

    </div>
  )
}
