export const raw_guide_data = '';
'<< Horde\n#name 1-10 Mulgore\n#next 10-20 Eversong Woods / Ghostlands << !Warrior !Shaman\n#next 10-13 Mulgore << Warrior/Shaman\nstep << !Tauren\n\t#sticky\n\t#completewith next'
.goto Mulgore,44.9,77.1
    +You have selected a guide meant for Tauren. This zone will NOT work well for you due to missing one of the main questlines that are gated for Tauren only. It is recommended you choose the same starter zone that you start in
step
.goto Mulgore,44.9,77.1
    .accept 747 >>Accept The Hunt Begins
step
    .goto Mulgore,44.2,76.1
    .accept 752 >>Accept A Humble Task
step << Warrior/Shaman
    #sticky
    #completewith next
+Kill Plainstriders for 10c+ of vendor trash
.goto Mulgore,45.6,74.0,30,0
step << Warrior/Shaman
    .goto Mulgore,45.3,76.5
    .vendor >> vendor trash
step << Warrior
.goto Mulgore,44.0,76.1
    .train 6673 >>Train Battle Shout
step << Shaman
.goto Mulgore,45.0,75.9
    .train 8017 >>Train Rockbiter Weapon
step
    #sticky
    #completewith Plainstrider
>>Kill Plainstriders en route to next quests
.complete 747,1 --Plainstrider Meat (7)
.complete 747,2 --Plainstrider Feather (7)
step
    .goto Mulgore,50.0,81.1
    .turnin 752 >>Turn in A Humble Task
    .accept 753 >>Accept A Humble Task