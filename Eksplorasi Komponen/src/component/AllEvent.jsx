const AllEvent = () => {
  return (
    <table className="border-slate-950 border-2">
      <thead>
        <tr>
          <th className="border-2 border-slate-900">Event</th>
          <th className="border-2 border-slate-900">Contoh</th>
          <th className="border-2 border-slate-900">Element HTML</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td onClick={() => console.log("onClick")}>onClick</td>
          <td>
            <button>onClick</button>
          </td>
          <td>semua</td>
        </tr>
        <tr>
          <td onDoubleClick={() => console.log("onDoubleClick")}>
            onDoubleClick
          </td>
          <td>
            <button>onDoubleClick</button>
          </td>
          <td>semua</td>
        </tr>
        <tr>
          <td onDragStart={() => console.log("onDragStart")}>onDragStart</td>
          <td>
            <button>onDragStart</button>
          </td>
          <td>semua</td>
        </tr>
        <tr>
          <td>onDrop</td>
          <td>
            <button>onDrop</button>
          </td>
          <td>semua</td>
        </tr>
        <tr>
          <td>onKey</td>
          <td>onKey</td>
          <td>semua</td>
        </tr>
        <tr>
          <td>onFocus, onBlur & onSelect</td>
          <td>
            <input type="text" defaultValue={""} />
          </td>
          <td>input, textarea, select, button</td>
        </tr>
        <tr>
          <td>onChange</td>
          <td>
            <input type="text" defaultValue={"onChange"} />
            <br />
            <input type="radio" name="gender" value={"1"} /> Pria
            <input type="radio" name="gender" value={"0"} /> Wanita
            <br />
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </td>
          <td>input, textarea, select, button</td>
        </tr>
        <tr>
          <td>onCopy, onCut, onPaste</td>
          <td>
            <input type="text" defaultValue={"Clipboard"} />
          </td>
          <td>semua</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AllEvent;
