import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, Torus, Octahedron, Box } from "@react-three/drei";

function IconCanvas({ children }) {
    return (
        <div className="w-20 h-20">
            <Canvas camera={{ position: [0, 0, 3.5] }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={2} color="#4f46e5" />
                <pointLight position={[-3, -3, 2]} intensity={1.5} color="#ec4899" />
                {children}
            </Canvas>
        </div>
    );
}

// Analytics: abstract data structure (Icosahedron) with wireframe for "tech" feel
export function AnalyticsIcon() {
    return (
        <IconCanvas>
            <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
                <Icosahedron args={[1.2, 0]}>
                    <MeshDistortMaterial 
                        color="#60a5fa" 
                        wireframe 
                        speed={1.5} 
                        distort={0.4} 
                        roughness={0}
                        metalness={1}
                    />
                </Icosahedron>
            </Float>
        </IconCanvas>
    );
}

// SEO: Global/Connected feel (Torus Knot-like or Ring)
export function SeoIcon() {
    return (
        <IconCanvas>
            <Float speed={2.5} rotationIntensity={2} floatIntensity={1}>
                {/* Outer Ring */}
                <Torus args={[1, 0.1, 16, 32]} rotation={[Math.PI / 3, 0, 0]}>
                     <meshStandardMaterial color="#c084fc" emissive="#7c3aed" emissiveIntensity={0.5} roughness={0.2} metalness={0.8} />
                </Torus>
                {/* Inner Core */}
                <Octahedron args={[0.5, 0]}>
                     <meshStandardMaterial color="#e879f9" wireframe />
                </Octahedron>
            </Float>
        </IconCanvas>
    );
}

// Ads: Impact/Target (Floating Dynamic Shapes)
export function AdsIcon() {
    return (
        <IconCanvas>
            <Float speed={4} rotationIntensity={1.5} floatIntensity={2}>
                 <group>
                    <Octahedron args={[1, 0]}>
                         <MeshDistortMaterial color="#facc15" speed={5} distort={0.6} transparent opacity={0.8} />
                    </Octahedron>
                 </group>
            </Float>
        </IconCanvas>
    );
}

// Mobile: Sleek Glass Device
export function MobileIcon() {
    return (
        <IconCanvas>
             <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                <Box args={[1, 1.8, 0.2]}>
                    <meshPhysicalMaterial 
                        color="#4ade80" 
                        transmission={0.6}
                        thickness={1}
                        roughness={0.1} 
                        mentalness={0.5}
                        clearcoat={1}
                    />
                </Box>
            </Float>
        </IconCanvas>
    );
}
