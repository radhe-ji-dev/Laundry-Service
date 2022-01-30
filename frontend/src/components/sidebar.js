import React from "react";

function sidebar(props) {
  return (
    <div clasName="row" style={{ backgroundColor: "var(--blue)" }}>
      <div className="col-md-12" style={{ color: "var(--blue)" }}>
        <button>
          <i class="fa fa-home fa-2x text-white"></i>
        </button>
        <button>
          <i class="fa fa-plus-circle fa-2x text-white"></i>
        </button>
        <button>
          <i class="fa fa-bars fa-2x text-white"></i>
        </button>
      </div>
    </div>
  );
}

export default sidebar;
