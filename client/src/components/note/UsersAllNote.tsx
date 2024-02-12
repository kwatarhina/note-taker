import { useEffect, useState } from "react"
import { fetchNotes, AllNoteReturnData } from "../../services/note"
import GeneralCard from "../card/GeneralCard";

interface NoteContent {
    _id?: string;
    authorId?: string;
    content?: string;
    title?: string;
    created?: string;
    createdAt?: string
}

const UsersAllNote = () => {
    const [notes, setNotes] = useState<NoteContent[]>([]);

    useEffect(() => {
        fetchNotes()
            .then((result: AllNoteReturnData) => {
                if (result.isSuccess) {
                    const allNotes: Array<NoteContent> = result.responseData.data || [];
                    return setNotes(() => {
                        return [...allNotes];
                    });
                }
                window.alert(result.responseData.message.split("#"));
            })
    }, [])

    return (
        <div className="pt-3" >
            <div className="flex flex-wrap pl-2 pr-2" >
                {
                    notes.map((note: NoteContent) => {
                        return (
                            <GeneralCard key={note._id} className="cursor-pointer m-1 mr-2 " title={note?.title} content={note?.content} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UsersAllNote