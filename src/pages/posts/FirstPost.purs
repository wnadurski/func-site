module Funcsite.Posts.FirstPost where

import Prelude
import React.Basic.DOM (h1_, text)
import React.Basic.Hooks (Component, component)
import React.Basic.Hooks as Hooks

type Props
  = {}

mkFirstPost :: Component Props
mkFirstPost =
  component "FirstPost" \_ -> Hooks.do
    pure do
      h1_ [ text "Hello Purescript 2" ]
