import os
import json

regions = []

for region in os.listdir(".") : 
    if os.path.isdir(region):
        regions.append(region) 

for region in regions : 
    univs = os.listdir("./"+region)
    univJson = [{'univ': univ} for univ in univs] 
    with open("./"+region+'/univs.json', 'w') as f:
        json.dump(univJson, f)
    for univ in univs :
        cours = os.listdir("./"+region+"/"+univ)
        coursJson = [{'cours': cour} for cour in cours]
        with open("./"+region+"/"+univ+'/cours.json', 'w') as f:
            json.dump(coursJson, f)
        for cour in cours : 
            videos = os.listdir("./"+region+"/"+univ+"/"+cour)
            videoJson = [{'video': video} for video in videos]
            with open("./"+region+"/"+univ+"/"+cour+'/videos.json', 'w') as f:
                json.dump(videoJson, f)