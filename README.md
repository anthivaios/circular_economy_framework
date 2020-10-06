# circular_economy_framework
Theses : Circular Economy Framework


### install project requirements
 pip install -r requirements.txt
 
 to add a new library
 pip freeze > requirements.txt
 
 ### run project
 python test.py
 
 ### Form Score Ratings
  recycled material: (>= 40) ->2 | (>=30) -> 1 | 0
  disassemble time: (<= 7) ->2 | (<=16) -> 1 | 0
  energy: (<= 2) ->2 | (<=2.4) -> 1 | 0
  Co^2: (<= 0.5) ->2 | (<= 0.7) -> 1 | 0
  Water: (<= 130) ->2 | (<= 145) -> 1 | 0
  Checks: (>= 90) ->2 | (>= 60) -> 1 | 0
  Remanufactured: (>= 15) ->2 | (>= 9) -> 1 | 0
  Reused + Recycling: (>= 85) ->2 | (>= 70) -> 1 | 0
  Eol: (>= 90) ->2 | (>= 75) -> 1 | 0
  Secondary: (>= 40) ->2 | (>= 30) -> 1 | 0
  
  
 
 
 ### guides for pyCharm
  automatic imports: 
  alt+ enter
  
  formatted lines:
  ctrl+alt+l
 
