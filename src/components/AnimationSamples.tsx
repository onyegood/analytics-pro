import React from 'react';

interface Props {}

const AnimationSamples: React.FC<Props> = () => {
  return (
    <>
      <button className="animate-bounce delay-150 duration-300 ...">
        Button A
      </button>
      <button className="animate-bounce delay-300 duration-300 ...">
        Button B
      </button>
      <button className="animate-bounce delay-700 duration-300 ...">
        Button C
      </button>
      <button className="animate-bounce direction-normal ...">Button A</button>
      <button className="animate-bounce direction-reverse ...">Button B</button>
      <button className="animate-bounce direction-alternate ...">
        Button C
      </button>
      <button className="animate-bounce direction-alternate-reverse ...">
        Button C
      </button>
      <button className="animate-bounce duration-150 ...">Button A</button>
      <button className="animate-bounce duration-300 ...">Button B</button>
      <button className="animate-bounce duration-700 ...">Button C</button>
      <button className="animate-bounce fill-mode-none ...">Button A</button>
      <button className="animate-bounce fill-mode-forwards ...">
        Button B
      </button>
      <button className="animate-bounce fill-mode-backwards ...">
        Button C
      </button>
      <button className="animate-bounce fill-mode-both ...">Button C</button>
      <button className="animate-bounce repeat-0 ...">Button A</button>
      <button className="animate-bounce repeat-1 ...">Button B</button>
      <button className="animate-bounce repeat-infinite ...">Button C</button>
      <button className="animate-bounce running ...">Button B</button>
      <button className="animate-bounce paused ...">Button A</button>
      <button className="animate-bounce ease-linear ...">Button A</button>
      <button className="animate-bounce ease-in ...">Button B</button>
      <button className="animate-bounce ease-out ...">Button C</button>
      <button className="animate-bounce ease-in-out ...">Button C</button>
      <button className="motion-safe:animate-bounce ...">Button B</button>
      <button className="animate-in fade-in ...">Button A</button>
      <button className="animate-in spin-in ...">Button B</button>
      <button className="animate-in zoom-in ...">Button C</button>
      <button className="animate-in slide-in-from-top ...">Button D</button>
      <button className="animate-in slide-in-from-left ...">Button E</button>
      <button className="animate-out fade-out ...">Button A</button>
      <button className="animate-out spin-out ...">Button B</button>
      <button className="animate-out zoom-out ...">Button C</button>
      <button className="animate-out slide-out-from-top ...">Button D</button>
      <button className="animate-out slide-out-from-left ...">Button E</button>
      <button className="animate-in fade-in ...">Button A</button>
      <button className="animate-in fade-in-25 ...">Button B</button>
      <button className="animate-in fade-in-50 ...">Button C</button>
      <button className="animate-in fade-in-75 ...">Button C</button>
      <button className="animate-in spin-in-1 ...">Button A</button>
      <button className="animate-in spin-in-6 ...">Button B</button>
      <button className="animate-in spin-in-75 ...">Button C</button>
      <button className="animate-in spin-in-90 ...">Button C</button>
      <button className="animate-in zoom-in ...">Button A</button>
      <button className="animate-in zoom-in-50 ...">Button B</button>
      <button className="animate-in zoom-in-75 ...">Button C</button>
      <button className="animate-in zoom-in-95 ...">Button C</button>
      <button className="animate-in slide-in-from-top ...">Button A</button>
      <button className="animate-in slide-in-from-bottom-48 ...">
        Button B
      </button>
      <button className="animate-in slide-in-from-left-72 ...">Button C</button>
      <button className="animate-in slide-in-from-right-96 ...">
        Button C
      </button>
      <button className="animate-out fade-out ...">Button A</button>
      <button className="animate-out fade-out-25 ...">Button B</button>
      <button className="animate-out fade-out-50 ...">Button C</button>
      <button className="animate-out fade-out-75 ...">Button C</button>
      <button className="animate-out spin-out-1 ...">Button A</button>
      <button className="animate-out spin-out-6 ...">Button B</button>
      <button className="animate-out spin-out-75 ...">Button C</button>
      <button className="animate-out spin-out-90 ...">Button C</button>
      <button className="animate-out zoom-out ...">Button A</button>
      <button className="animate-out zoom-out-50 ...">Button B</button>
      <button className="animate-out zoom-out-75 ...">Button C</button>
      <button className="animate-out zoom-out-95 ...">Button C</button>
      <button className="animate-out slide-out-to-top ...">Button A</button>
      <button className="animate-out slide-out-to-bottom-48 ...">
        Button B
      </button>
      <button className="animate-out slide-out-to-left-72 ...">Button C</button>
      <button className="animate-out slide-out-to-right-96 ...">
        Button C
      </button>
    </>
  );
};

export default AnimationSamples;
