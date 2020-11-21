#!/bin/bash
cp ../covid-19-growth/output/charts/* charts/
svgtag='<svg version=\"1.1\" viewBox=\"40 10 440 195\" width="100%" xmlns="http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\">'
for f in charts/*
do
  echo "Processing $f"
  tail -n +6 $f > foo
  mv foo $f
  sed "1 s/^/$svgtag/" $f > foo
  mv foo $f
done
