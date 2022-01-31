import React from 'react';
import { Wrapper, Note, LoadMoreButton } from './styled';
import MasonryLayout from '../MasonryLayout';
import { useHistory } from 'react-router-dom';

const NoteList = ({ data, hasMore, onLoadMoreClick }) => {
  const history = useHistory();

  const handleNoteClick = (id) => (e) => {
    const interactiveTags = ['A', 'BUTTON'];
    if (interactiveTags.includes(e.target.tagName)) { return }
    history.push(`/note/${id}`);
  };

  return (
    <Wrapper>
      {!data.length
        ? (
          <p>No notes yet</p>
        )
        : (
          <MasonryLayout>
            {data.map((note) => (
              <Note 
                key={note.id}
                data={note}
                tabIndex="0"
                role="link"
                onClick={handleNoteClick(note.id)}
              />
            ))}
          </MasonryLayout>
        )
      }
      {hasMore && <LoadMoreButton onClick={() => onLoadMoreClick()}>Load more...</LoadMoreButton>}
    </Wrapper>
  )
}

export default NoteList;