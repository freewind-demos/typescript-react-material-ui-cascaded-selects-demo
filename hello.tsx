import React, {useState, useEffect} from 'react'

import {Select, MenuItem, FormControl, InputLabel} from '@material-ui/core'

type Option = {
  team: string,
  members: string[]
}

const options: Option[] = [
  {
    team: 'Team1',
    members: ['User11', 'User12', 'User13']
  },
  {
    team: 'Team2',
    members: ['User21', 'User22', 'User23']
  }
]

export default function MyList() {
  const [selectedTeam, setSelectedTeam] = useState('')
  const [selectedMember, setSelectedMember] = useState('')
  const [currentMembers, setCurrentMembers] = useState<string[]>([])

  useEffect(() => {
    if (selectedTeam) {
      setCurrentMembers(options.find(it => it.team === selectedTeam)!.members)
    } else {
      setCurrentMembers([])
    }
  }, [selectedTeam])

  return <div>
    <div>Selected Value: {selectedTeam} -> {selectedMember}</div>

    <FormControl>
      <InputLabel htmlFor="team">Team</InputLabel>
      <Select
        value={selectedTeam}
        onChange={event => setSelectedTeam(event.target.value as string)}
        inputProps={{name: 'team'}}
        style={{width: 150}}>
        {options.map(it => it.team).map(team => <MenuItem key={team} value={team}>{team}</MenuItem>)}
      </Select>
    </FormControl>

    <FormControl>
      <InputLabel htmlFor="member">Member</InputLabel>
      <Select
        value={selectedMember}
        onChange={event => setSelectedMember(event.target.value as string)}
        inputProps={{name: 'member'}}
        style={{width: 150}}>
        {currentMembers.map(member => <MenuItem key={member} value={member}>{member}</MenuItem>)}
      </Select>
    </FormControl>
  </div>

}

