import './style.css'
import { members } from './members'


const huntr = await members();
 const memberCards = huntr.data
   .map(
     (member: any) => `
        <div class="card">
            <h2>${member.fullName}</h2>
            <p>Email: ${member.email}</p>
            <p>Active: ${member.isActive ? "Yes" : "No"}</p>
        </div>
    `
   )
   .join("");

    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
        <div class="content">
            ${memberCards}
        </div>
    `;


