import { DevRevClient, DevRev } from '@fern-api/devrev';

void main();

async function main() {
  const client = new DevRevClient({
    apiKey: 'YOUR_API_KEY',
  });

  const createIssueResponse = await client.works.create({
    type: 'issue',
    priority: DevRev.IssuePriority.P0,
    appliesToPart: 'product',
    title: 'My issue',
    ownedBy: ['bob'],
  });
  console.log('Created issue!', createIssueResponse);

  const createTicketResponse = await client.works.create({
    type: 'ticket',
    severity: DevRev.TicketSeverity.Blocker,
    appliesToPart: 'product',
    title: 'My issue',
    ownedBy: ['bob'],
  });
  console.log('Created ticket!', createTicketResponse);
}
