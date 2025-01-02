import { Document, model, models, Schema } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    title: string;                    // Title of the event
    description?: string;             // Description of the event (optional)
    location: string;                 // Location of the event
    imageUrl: string;                 // URL to the event image
    createdAt: Date;                  // Date the event was created
    startDateTime: Date;              // Event start date and time
    endDateTime: Date;                // Event end date and time
    price?: string;                   // Price of the event (optional)
    isFree: boolean;                  // Whether the event is free or not
    url?: string;                     // URL for more event details (optional)
    category: {_id:string, name:string}              // Reference to a Category (_id of the category)
    organizer: {_id:string, firstName:string, lastName:string}              // Reference to a User (organizer) (_id of the user)
}

const EventSchema = new Schema({
    title: {type: String,required: true,},
    description: {type: String,},
    location: {type: String,required: true,},
    imageUrl: {type: String,required: true,},
    createdAt: {type: Date,default: Date.now,},
    startDateTime: {type: Date,default: Date.now,},
    endDateTime: {type: Date,default: Date.now,},
    price: {type: String,},
    isFree: {type: Boolean,default: false,},
    url: {type: String,},
    category: {type: Schema.Types.ObjectId,ref: 'Category',},
    organizer: {type: Schema.Types.ObjectId,ref: 'User',},
});

const Event = models.Event || model('Event', EventSchema);

export default Event;