module Funcsite.Posts.FirstPost.Interop where

import Effect.Unsafe (unsafePerformEffect)
import Funcsite.Posts.FirstPost (mkFirstPost) 
import React.Basic (JSX)
  
jsFirstPost :: Record () -> JSX
jsFirstPost = unsafePerformEffect mkFirstPost