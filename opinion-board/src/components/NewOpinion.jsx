import {useActionState, use} from "react";
import {OpinionsContext} from "../store/opinions-context.jsx";
import Submit from "./Submit.jsx";

export function NewOpinion() {
  const {addOpinion} = use(OpinionsContext);

  const [formState, formAction] = useActionState(createOpinionAction, {error: null});

  async function createOpinionAction(prevFormState, formData) {
    const userName = formData.get('userName');
    const title = formData.get('title');
    const body = formData.get('body');

    let errors = [];
    if (!userName.trim()) {
      errors.push("Name is required.");
    }
    if (title.trim().length < 5) {
      errors.push("Title must be at least 5 characters.");
    }
    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push("Opinion must be between 10 and 300 characters.");
    }
    if (errors.length > 0) {
      return {
        errors: errors,
        opinion: {
          userName,
          title,
          body,
        }
      }
    }

    await addOpinion({title, body, userName});

    return {errors: null}
  }

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.opinion?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.opinion?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.opinion?.body}></textarea>
        </p>

        {formState.errors && (
            <ul className="errors">
              {formState.errors.map(error => <li key={error}>{error}</li>)}
            </ul>
        )}

      <Submit />
      </form>
    </div>
  );
}
