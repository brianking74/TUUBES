import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface HospitalityItem {
  icon: React.ReactNode;
  text: string;
}