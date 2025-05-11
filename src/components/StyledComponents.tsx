import React from 'react';
import {
  createRestyleComponent,
  createVariant,
  spacing,
  border,
  backgroundColor,
  layout,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  VariantProps,
  LayoutProps,
  createBox,
  createText,
} from '@shopify/restyle';
import {
  TextInput as RNTextInput,
  Pressable as RNPressable,
  ScrollView as RNScrollView,
  TextInputProps as RNTextInputProps,
  PressableProps as RNPressableProps,
  ScrollViewProps as RNScrollViewProps,
  View as RNView,
  Text as RNText,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Theme } from '../theme/foundation';

// Create base Box (View) and Text components with Restyle
export const Box = createBox<Theme>();
export const Text = createText<Theme>();

// Create Icon component with Restyle props
export const StyledIcon = createRestyleComponent<
  SpacingProps<Theme> & BorderProps<Theme> & BackgroundColorProps<Theme> & LayoutProps<Theme>,
  Theme
>([spacing, border, backgroundColor, layout], Icon);

// Base components with spacing, border, background color, and layout props
const BaseTextInput = createRestyleComponent<
  SpacingProps<Theme> & BorderProps<Theme> & BackgroundColorProps<Theme> & LayoutProps<Theme> & RNTextInputProps,
  Theme
>([spacing, border, backgroundColor, layout], RNTextInput);

const BasePressable = createRestyleComponent<
  SpacingProps<Theme> & BorderProps<Theme> & BackgroundColorProps<Theme> & LayoutProps<Theme> & RNPressableProps,
  Theme
>([spacing, border, backgroundColor, layout], RNPressable);

const BaseScrollView = createRestyleComponent<
  SpacingProps<Theme> & BorderProps<Theme> & BackgroundColorProps<Theme> & LayoutProps<Theme> & RNScrollViewProps,
  Theme
>([spacing, border, backgroundColor, layout], RNScrollView);

// Variant components
const TextInput = createRestyleComponent<
  VariantProps<Theme, 'inputVariants'> & SpacingProps<Theme> & BorderProps<Theme> & BackgroundColorProps<Theme> & LayoutProps<Theme> & RNTextInputProps,
  Theme
>([spacing, border, backgroundColor, layout, createVariant({ themeKey: 'inputVariants' })], BaseTextInput);

const Pressable = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> & SpacingProps<Theme> & BorderProps<Theme> & BackgroundColorProps<Theme> & LayoutProps<Theme> & RNPressableProps,
  Theme
>([spacing, border, backgroundColor, layout, createVariant({ themeKey: 'buttonVariants' })], BasePressable);

const ScrollView = createRestyleComponent<
  VariantProps<Theme, 'scrollViewVariants'> & SpacingProps<Theme> & BorderProps<Theme> & BackgroundColorProps<Theme> & LayoutProps<Theme> & RNScrollViewProps,
  Theme
>([spacing, border, backgroundColor, layout, createVariant({ themeKey: 'scrollViewVariants' })], BaseScrollView);

export { TextInput, Pressable, ScrollView }; 