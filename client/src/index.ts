#!/usr/bin/env node

import clear from 'clear';
import { time } from 'console';
import readline from 'readline';
import { SubscribeClient } from './subscribeClient';



const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

clear();

let client:SubscribeClient;

  r1.question("Channel: ", (channel) => {  
    
    r1.question("User: ", (url) => {        

      client = new SubscribeClient(channel, url);
      client.Subscribe().then(r => console.log(r));

      r1.close()
    })
  });

  

