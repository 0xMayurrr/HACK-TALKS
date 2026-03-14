const DoodleShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Star */}
    <svg className="absolute top-[10%] left-[5%] w-12 h-12 animate-float opacity-40" viewBox="0 0 50 50" fill="none">
      <path d="M25 2L30 20H48L34 30L38 48L25 38L12 48L16 30L2 20H20L25 2Z" fill="hsl(var(--yellow))" />
    </svg>
    {/* Circle */}
    <div className="absolute top-[20%] right-[10%] w-16 h-16 rounded-full border-4 border-dashed animate-float-reverse" style={{ borderColor: 'hsl(var(--purple-light))' }} />
    {/* Squiggle */}
    <svg className="absolute bottom-[15%] left-[8%] w-20 h-10 animate-wiggle opacity-30" viewBox="0 0 80 40" fill="none">
      <path d="M5 20C15 5 25 35 35 20C45 5 55 35 65 20C75 5 80 20 80 20" stroke="hsl(var(--yellow-dark))" strokeWidth="3" strokeLinecap="round" />
    </svg>
    {/* Blob */}
    <div className="absolute top-[60%] right-[5%] w-24 h-24 animate-blob-morph opacity-20" style={{ background: 'hsl(var(--purple))' }} />
    {/* Small dots */}
    <div className="absolute top-[40%] left-[15%] w-4 h-4 rounded-full animate-float opacity-50" style={{ background: 'hsl(var(--yellow))' }} />
    <div className="absolute top-[70%] right-[20%] w-3 h-3 rounded-full animate-float-reverse opacity-40" style={{ background: 'hsl(var(--purple-light))' }} />
    {/* Triangle */}
    <svg className="absolute bottom-[30%] right-[15%] w-10 h-10 animate-wiggle opacity-25" viewBox="0 0 40 40" fill="none">
      <path d="M20 5L35 35H5L20 5Z" stroke="hsl(var(--yellow))" strokeWidth="3" fill="none" />
    </svg>
    {/* Plus */}
    <svg className="absolute top-[80%] left-[25%] w-8 h-8 animate-float opacity-30" viewBox="0 0 30 30" fill="none">
      <path d="M15 5V25M5 15H25" stroke="hsl(var(--purple))" strokeWidth="3" strokeLinecap="round" />
    </svg>
  </div>
);

export default DoodleShapes;
