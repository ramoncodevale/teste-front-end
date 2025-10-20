import { tags } from "../../constants";

import "./tabs.scss";

const Tabs = () => {
    return ( 
     <div className="tabs">
        <div className="container">
           <div className="tabs-container">
            {tags.map((tag) => (
                <button key={tag.id}>
                    {tag.title}
                </button>
            ))}
           </div>
        </div>
     </div>
     );
}
 
export default Tabs;