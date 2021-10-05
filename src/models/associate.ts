import { Database } from './index';

Database.models.Partner.belongsToMany(Database.models.event, {
    through: 'partner_events',
    as: 'partner_events'
});

Database.models.Partner.hasOne(Database.models.Partner, {
    as: 'events_partner'
});
