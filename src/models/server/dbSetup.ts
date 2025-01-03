import { db } from "../name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import { databases } from "./config";
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection";

export default async function getOrCreateDB() {

    try {
        await databases.get(db);
        console.log("Database Connection")
    } catch (error) {
        try {
            await databases.create(db, db)
            console.log("Database Created")
            // Create collections
            await Promise.all(
                [
                    createQuestionCollection(),
                    createAnswerCollection(),
                    createCommentCollection(),
                    createVoteCollection()
                ]
            )
            console.log("Collections are being created")
        } catch (error) {
            console.log("Error creating collections:", error)
        }
    }

    return databases;
}