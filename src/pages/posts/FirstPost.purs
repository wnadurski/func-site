module Funcsite.Posts.FirstPost (default) where

import Prelude

import Effect.Unsafe (unsafePerformEffect)
import React.Basic (JSX)
import React.Basic.DOM (h1_, text)
import React.Basic.Hooks (Component, component)
import React.Basic.Hooks as Hooks

type Props
  = {}

mkFirstPost :: Component Props
mkFirstPost =
  component "FirstPost" \_ -> Hooks.do
    pure do
      h1_ [ text "Hello Purescript 3" ]

default :: Record () -> JSX
default = unsafePerformEffect mkFirstPost